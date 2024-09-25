"use client";

import React, { useCallback, useEffect, useState } from "react";

import Head from "next/head";
import { useRouter } from "next/router";
import { ProductShowcase } from "@/components/product-showcase";
import { getEntries, getSingleEntry } from "@/services/useContentfulData";
import { treatProduct } from "@/utils/treatedData";
import Layout from "@/layout/layout";
import { InstaItem } from "@/sections/footer-section/Footer.section";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { BreadCrumb } from "@/components/breadcrumb-component";

const Product: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  insta,
  product,
}) => {
  const [name, setName] = useState<string>("");
  const { query, isFallback } = useRouter();
  const { entryId } = query;

  const getProductName = useCallback(async () => {
    if (!entryId || Array.isArray(entryId)) return;
    const treatedProduct = treatProduct(product as any);
    setName(treatedProduct.name);
  }, [entryId, product]);

  useEffect(() => {
    getProductName();
  }, [entryId, getProductName]);

  if (isFallback) {
    return <div>Loading...</div>; // Adicione um loading para o fallback
  }

  return (
    <Layout insta={insta}>
      <Head>
        <title>{name}</title>
      </Head>
      <BreadCrumb />
      <ProductShowcase entryId={entryId} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const entries = await getEntries({ contentType: "produtos" });
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
  const fields = "media_url,media_type,permalink";

  // Buscando os dados do produto pelo `entryId`
  const product = await getSingleEntry({
    entryId: params?.entryId as string,
  });

  const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;
  try {
    const { data } = await axios.get(url);

    return {
      props: {
        product, // Dados do produto
        insta: data.data,
      },
      revalidate: 60 * 5, // 5 minutes
    };
  } catch (error) {
    return {
      props: {
        product, // Dados do produto
        insta: [],
      },
      revalidate: 60 * 5, // 5 minutes
    };
  }
}) satisfies GetStaticProps<{
  insta: InstaItem[];
}>;

export default Product;
