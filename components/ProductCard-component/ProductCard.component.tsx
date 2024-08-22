import Image from "next/image";

import { Inter } from "next/font/google";
import { Product } from "@/interfaces/contetfulData";
import styles from "./ProductCard.module.scss";
import getBase64 from "@/utils/getLocalBase64";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ProductCard({
  product: { images, name, price, colors },
}: {
  product: Product;
}) {
  // const myBlurDataUrl = await getBase64(images[0]);
  return (
    <div
      data-no-blobity
      className={`${inter.className} ${styles.container} flex flex-col gap-5 `}
    >
      <div
        className="relative w-full z-[999]"
        style={{
          aspectRatio: 0.688,
        }}
      >
        <Image
          layout="fill"
          src={images[0]}
          alt="Product"
          className="object-cover bg-center"
          // blurDataURL={myBlurDataUrl}
        />
      </div>
      <div className="flex flex-col items-start">
        <h3 className={"uppercase"}>{name}</h3>
        <p className="text-lg font-bold">R$ {price}</p>
        <p className={`text-[14px]`}>
          {colors.toString().split(",").length}{" "}
          {colors.length === 1 ? "cor" : "cores"}
        </p>
      </div>
    </div>
  );
}
