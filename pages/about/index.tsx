import Layout from "@/layout/layout";
import { FooterProps } from "@/sections/footer-section/Footer.section";
import axios from "axios";
import React from "react";

// import { Container } from './styles';

const About: React.FC<FooterProps> = ({ insta }) => {
  return <Layout insta={insta}>test</Layout>;
};

export const getStaticProps = async () => {
  const token = process.env.INSTA_TOKEN;
  const fields = "media_url,media_type,permalink";
  const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;
  const { data } = await axios.get(url);
  return {
    props: {
      insta: data.data,
    },
    revalidate: 60 * 5, // 5 minutes
  };
};

export default About;
