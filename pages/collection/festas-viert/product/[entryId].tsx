import React from 'react';
import {
  getEntries,
  getSingleEntry,
} from '@/services/useContentfulData';
import Layout from '@/layout/layout';
import axios from 'axios';
import { InstaItem } from '@/sections/footer-section/Footer.section';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import ProductSection from '@/sections/product-section';

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
  const entries = await getEntries({ contentType: 'produtos' });
  const paths = entries.map((entry) => ({
    params: { entryId: entry.sys.id },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = (async ({ params }) => {
  const token = process.env.INSTA_TOKEN;
  const fields = 'media_url,media_type,permalink';
  const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;

  // Buscando os dados do produto pelo `entryId`
  const product = await getSingleEntry({
    entryId: params?.entryId as string,
  });

  try {
    const { data } = await axios.get(url);

    return {
      props: {
        insta: data.data,
        product,
      },
      revalidate: 86400, // 1 day
    };
  } catch (error) {
    return {
      props: {
        insta: [],
        product,
      },
      revalidate: 86400, // 1 day
    };
  }
}) satisfies GetStaticProps<{
  insta: InstaItem[];
}>;

export default Product;
