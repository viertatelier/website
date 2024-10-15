import React from 'react';
import Layout from '@/layout/layout';
import axios from 'axios';
import { InstaItem } from '@/sections/footer-section/Footer.section';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import ProductSection from '@/sections/product-section';
import { getYampiProduct, getYampiProductIds, getYampiSkus } from '@/services/useYampiData';

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
    .filter(id => id) // Filtrando IDs indefinidos
    .map((id) => ({
      params: { id: id.toString() },
    }));

  return {
    paths,
    fallback: true, // Ou false, dependendo da sua estratégia de fallback
  };
};

export const getStaticProps = (async ({ params }) => {
  const token = process.env.INSTA_TOKEN;
  const fields = 'media_url,media_type,permalink';
  const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;

  // Buscando os dados do produto pelo `entryId`
  const festaProduct = await getYampiProduct({
    productId: Number(params?.id || 0),
  });

  const skus = await getYampiSkus();
  
  const productWithSkuSplit = festaProduct.data.sku.split(',')

  const product = skus.data.filter((sku: any) =>
    productWithSkuSplit.includes(sku.sku),
  );

  console.log('productssssss', product);

  try {
    const { data } = await axios.get(url);

    return {
      props: {
        insta: data.data,
        product: product[0],
      },
      revalidate: 86400, // 1 day
    };
  } catch (error) {
    return {
      props: {
        insta: [],
        product: product[0],
      },
      revalidate: 86400, // 1 day
    };
  }
}) satisfies GetStaticProps<{
  insta: InstaItem[];
}>;

export default Product;
