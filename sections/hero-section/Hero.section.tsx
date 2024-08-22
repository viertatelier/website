import React, { useEffect, useState } from "react";
import { Header } from "@/components";
import { HeroBackground, HeroContent } from "./components";
import { usePathname } from "next/navigation";

const Hero: React.FC = () => {
  const [title, setTitle] = useState("Atelier Sob Medida");

  const changeText = (collection: "Viert Festas" | "Viert Noivas") => {
    switch (collection) {
      case "Viert Festas":
        return "Vestidos Festa";
      case "Viert Noivas":
        return "Vestidos Noivas";
      default:
        return "Atelier Sob Medida";
    }
  };

  const pathname = usePathname();

  const isDefaultBg = title === "Atelier Sob Medida";

  useEffect(() => {
    if (!pathname) return;

    if (pathname.includes("festa")) {
      setTitle(changeText("Viert Festas"));
    } else if (pathname.includes("noivas")) {
      setTitle(changeText("Viert Noivas"));
    } else {
      setTitle("Atelier Sob Medida");
    }
  }, [pathname]);
  return (
    <section
      className="
      relative
      flex
      flex-col
      justify-center
      w-full
    "
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
