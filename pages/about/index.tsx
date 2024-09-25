import React from "react";
import Layout from "@/layout/layout";
import axios from "axios";
import { Pictures } from "@/components/product-showcase/components";
import { Header } from "@/components";
import { Footer } from "@/sections";
import { NavigationMobile } from "@/components/navigation-component";

type AboutProps = {
  insta: any[];
  images: string[]; // Adicionando as imagens para exibir
};

const About: React.FC<AboutProps> = ({ insta, images }) => {
  return (
    <>
      <NavigationMobile />
      <Header lightMode="dark" />
      <Pictures
        images={images}
        style={{
          alignItems: "center",
          marginBlock: "5vh",
        }}
      />
      <Footer insta={insta} />
    </>
  );
};

// Função para buscar as imagens do PDF ou outras fontes
export const getStaticProps = async () => {
  const token = process.env.INSTA_TOKEN;
  const fields = "media_url,media_type,permalink";
  const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;

  // Adicionar lógica para obter as imagens do PDF
  const imagesFromPdf = [
    "/assets/about/Viert_sob-medida_page-0001.webp",
    "/assets/about/Viert_sob-medida_page-0002.webp",
    "/assets/about/Viert_sob-medida_page-0003.webp",
    "/assets/about/Viert_sob-medida_page-0004.webp",
    "/assets/about/Viert_sob-medida_page-0005.webp",
    "/assets/about/Viert_sob-medida_page-0006.webp",
    "/assets/about/Viert_sob-medida_page-0007.webp",
    "/assets/about/Viert_sob-medida_page-0008.webp",
    "/assets/about/Viert_sob-medida_page-0009.webp",
  ];

  try {
    const { data } = await axios.get(url);

    return {
      props: {
        insta: data.data,
        images: imagesFromPdf,
      },
      revalidate: 60 * 5, // 5 minutes
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        insta: [],
        images: imagesFromPdf,
      },
      revalidate: 60 * 5, // 5 minutes
    };
  }
};

export default About;
