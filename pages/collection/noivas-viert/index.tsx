import ProductList from "@/components/productlist-component/productlist.component";
import Layout from "@/layout/layout";
import { InstaItem } from "@/sections/footer-section/Footer.section";
import { getEntries } from "@/services/useContentfulData";
import { treatProducts } from "@/utils/treatedData";
import axios from "axios";
import Head from "next/head";

function NoivasViert({
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
          <title>Noivas Viert</title>
          <meta name="description" content="Noivas Viert" />
        </Head>
        <ProductList products={products} collection="noivas" />
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const [allProducts] = (await Promise.all([
    getEntries({
      contentType: "produtos",
    }),
  ])) as any;

  const products = treatProducts(allProducts).filter(
    (product) => product.collection === "Viert Noivas"
  );

  const token = process.env.INSTA_TOKEN;
  const fields = "media_url,media_type,permalink";
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

export default NoivasViert;
