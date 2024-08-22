import { CTA } from "@/components";
import { useApp } from "@/context/AppContext";
import React, { useEffect, useState } from "react";
import styles from "./Content.module.scss";

type ContentProps = {
  title: string;
};

const Content: React.FC<ContentProps> = ({ title = "Atelier Sob Medida" }) => {
  const {
    device: { isDesktop },
  } = useApp();

  return (
    <div className="flex flex-col gap-y-[20vh] lg:gap-y-[60px] text-center text-[#fff] w-full h-full justify-center">
      <div className="flex flex-col gap-y-[12px] lg:gap-y-[0]">
        <h1 className={styles.title}>{title}</h1>

        {title === "Atelier Sob Medida" && (
          <p className={styles.text}>
            Uma experiência única e personalizada{!isDesktop ? <br /> : " "}
            criada exclusivamente para você.
          </p>
        )}
      </div>

      {title === "Atelier Sob Medida" && (
        <CTA
          text="Descubra"
          mxAuto
          href={
            "#about"
          }
        />
      )}
    </div>
  );
};

export default Content;
