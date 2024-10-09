import React, { useEffect, useState } from "react";
import Header from "@/components/header-component/Header.component";
import { HeroBackground, HeroContent } from "./components";
import { usePathname } from "next/navigation";

const DEFAULT_TITLE = "Atelier Sob Medida";

const changeText = (collection: "Viert Festas" | "Viert Noivas" | "Default"): string => {
  const titles = {
    "Viert Festas": "Vestidos Festa",
    "Viert Noivas": "Vestidos Noivas",
    "Default": DEFAULT_TITLE,
  };
  return titles[collection];
};

const Hero: React.FC = () => {
  const [title, setTitle] = useState(DEFAULT_TITLE);
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    const getTitleBasedOnPath = () => {
      if (pathname.includes("festa")) return changeText("Viert Festas");
      if (pathname.includes("noivas")) return changeText("Viert Noivas");
      if (pathname.includes("about")) return "Sobre Nós";
      return DEFAULT_TITLE;
    };

    setTitle(getTitleBasedOnPath());
  }, [pathname]);

  const isDefaultBg = title === DEFAULT_TITLE;

  return (
    <section
      className="relative flex flex-col justify-center w-full"
      style={{
        height: isDefaultBg ? "100vh" : "58.80vh",
      }}
    >
      <Header />
      <HeroBackground imagePos={isDefaultBg ? "center" : "top"} />
      <HeroContent title={title} />
    </section>
  );
};

export default Hero;
