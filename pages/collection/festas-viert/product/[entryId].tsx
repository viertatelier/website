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
}) => {
  const [name, setName] = useState<string>("");
  const {
    query: { entryId },
  } = useRouter();

  const getProductName = useCallback(async () => {
    if (!entryId || Array.isArray(entryId)) return;
    const product = await getSingleEntry({ entryId });
    const treatedProduct = treatProduct(product as any);
    setName(treatedProduct.name);
  }, [entryId]);

  useEffect(() => {
    getProductName();
  }, [entryId, getProductName]);

  return (
    <Layout insta={insta}>
      <Head>
        <title>{name}</title>
      </Head>
      <BreadCrumb/>
      <ProductShowcase entryId={entryId} />
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

export const getStaticProps = (async (context) => {
  const token = process.env.INSTA_TOKEN;
  const fields = "media_url,media_type,permalink";
  const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;
    try {
    const { data } = await axios.get(url);

    return {
      props: {
        insta: data.data,
      },
      revalidate: 60 * 5, // 5 minutes
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        insta: [],
      },
      revalidate: 60 * 5, // 5 minutes
    };
  }
}) satisfies GetStaticProps<{
  insta: InstaItem[];
}>;

export default Product;
