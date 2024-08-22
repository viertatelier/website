import Image from "next/image";
import React from "react";
import styles from "./pictures.module.scss";
type PicturesProps = {
  images: string[];
};

const Pictures: React.FC<PicturesProps> = ({ images }) => {
  return (
    <div className={styles.container}>
      <div className={styles.principal}>
        <Image
          src={images[0]}
          alt="Imagem do Produto (1)"
          layout="fill"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Pictures;
