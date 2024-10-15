import ProductList from '@/components/productlist-component/productlist.component';
import Layout from '@/layout/layout';
import { InstaItem } from '@/sections/footer-section/Footer.section';
import {
  getYampiCategory,
  getYampiSkus,
} from '@/services/useYampiData';
import axios from 'axios';
import Head from 'next/head';

function FestasViert({
  products,
  insta,
}: {
  products: any;
  insta: InstaItem[];
}) {
  return (
    <Layout insta={insta}>
      <section className="container mx-auto pt-[5.47vh] pb-[4.22vh] lg:pb-[12.69vh] px-[2.04vw] bg-white">
        <Head>
          <title>Festas Viert</title>
          <meta name="description" content="Festas Viert" />
        </Head>
        <ProductList products={products} collection={'festas'} />
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const [allFestaProducts, skus] = (await Promise.all([
    getYampiCategory({
      categoryId: '5196207',
    }),
    getYampiSkus(),
  ])) as any;

  const productsWithSkuSplit = allFestaProducts.data.map(
    (product: any) => {
      return {
        ...product,
        sku: product.sku.split(','),
      };
    },
  );

  const products = productsWithSkuSplit.map((product: any) => {
    const skusWithProduct = skus.data.filter((sku: any) =>
      product.sku.includes(sku.sku),
    );
    return {
      ...product,
      skus: skusWithProduct,
    };
  });

  const token = process.env.INSTA_TOKEN;
  const fields = 'media_url,media_type,permalink';
  const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;

  try {
    const { data } = await axios.get(url);

    return {
      props: {
        insta: data.data,
        products,
      },
      revalidate: 86400, // 1 day
    };
  } catch (error) {
    return {
      props: {
        insta: [],
        products,
      },
      revalidate: 86400, // 1 day
    };
  }
};

export default FestasViert;
