import React from 'react';
import { getSingleEntry } from '@/services/useContentfulData';
import Layout from '@/layout/layout';
import axios from 'axios';
import { InstaItem } from '@/sections/footer-section/Footer.section';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import ProductSection from '@/sections/product-section';
import {
  getYampiCategory,
  getYampiProductIds,
  getYampiSkus,
} from '@/services/useYampiData';

const Product: React.FC<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ insta, product }) => {
  return (
    <Layout insta={insta}>
      <ProductSection product={product} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const productIds = await getYampiProductIds();

  if (!productIds || productIds.length === 0) {
    return {
      paths: [],
      fallback: true, // Ou false, dependendo da sua estratégia de fallback
    };
  }

  const paths = productIds
    .filter((id) => id) // Filtrando IDs indefinidos
    .map((id) => ({
      params: { id: id.toString() },
    }));

  return {
    paths,
    fallback: true, // Ou false, dependendo da sua estratégia de fallback
  };
};

export const getStaticProps = (async ({ params }) => {
  const { id } = params!; // Recebe o id da URL

  // Faz a busca de um único produto
  const [allNoivasProducts, skus] = (await Promise.all([
    getYampiCategory({
      categoryId: '5196208',
    }),
    getYampiSkus(),
  ])) as any;

  const product = allNoivasProducts.data.find((product: any) => {
    return product.id == id;
  });

  // Split do sku no produto para array, caso seja necessário
  const productWithSkuSplit = {
    ...product,
    sku: product.sku.split(','),
  };

  // Filtra os skus correspondentes ao produto
  const skusWithProduct = skus.data.filter((sku: any) =>
    productWithSkuSplit.sku.includes(sku.sku),
  );

  // Juntando os SKUs ao produto
  const productWithSkus = {
    ...productWithSkuSplit,
    sku: skusWithProduct,
  };

  // Pegando os dados do Instagram
  const token = process.env.INSTA_TOKEN;
  const fields = 'media_url,media_type,permalink';
  const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;

  try {
    const { data } = await axios.get(url);

    return {
      props: {
        insta: data.data,
        product: productWithSkus,
      },
      revalidate: 86400, // 1 day
    };
  } catch (error) {
    return {
      props: {
        insta: [],
        product: productWithSkus,
      },
      revalidate: 86400, // 1 day
    };
  }
}) satisfies GetStaticProps<{
  insta: InstaItem[];
}>;

export default Product;
