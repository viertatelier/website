import Image from "next/image";
import { Inter } from "next/font/google";
import { Product } from "@/interfaces/contetfulData";
import styles from "./ProductCard.module.scss";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap"; // Importando GSAP

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ProductCard({
  product: { images, name, price, colors },
}: {
  product: Product;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const imageRef1 = useRef<HTMLDivElement>(null);
  const imageRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHovered) {
      gsap.to(imageRef2.current, { opacity: 1, duration: 0.5 });
      gsap.to(imageRef1.current, { opacity: 0, duration: 0.5 });
    } else {
      gsap.to(imageRef2.current, { opacity: 0, duration: 0.5 });
      gsap.to(imageRef1.current, { opacity: 1, duration: 0.5 });
    }
  }, [isHovered]);

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
        onMouseEnter={() => {if(images.length > 1)setIsHovered(true)}}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div ref={imageRef1} className="absolute inset-0 opacity-1">
          <Image
            fill
            src={images[0]} // Primeira imagem
            alt="Product"
            className="object-cover bg-center"
          />
        </div>
        <div ref={imageRef2} className="absolute inset-0 opacity-0">
          <Image
            fill
            src={images[1]} // Segunda imagem
            alt="Product Hover"
            className="object-cover bg-center"
          />
        </div>
      </div>
      <div className="flex flex-col items-start">
        <h3 className={"uppercase"}>{name}</h3>
        <p className="text-lg font-bold">R$ {price}</p>
        <p className={`text-[14px]`}>
          {colors.length === 1
            ? colors[0]
            : colors.toString().split(",").length + " cores"}
        </p>
      </div>
    </div>
  );
}
