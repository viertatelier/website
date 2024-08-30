import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { ProductCard } from "../ProductCard-component";
import { Product } from "@/interfaces/contetfulData";
import gsap from "gsap";
import { useApp } from "@/context/AppContext";

type ProductListProps = {
  products: Product[];
  collection: "festas" | "noivas";
};

const ProductList: React.FC<ProductListProps> = ({ products, collection }) => {
  const { device: { isMobile } } = useApp();
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = isMobile ? 8 : 12;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const productListRef = useRef<HTMLDivElement | null>(null);

  const empty = products.length === 0;

  const handlePageChange = (newPage: number) => {
    if (productListRef.current) {
      gsap.to(productListRef.current, {
        opacity: 0,
        x: -100,
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => {
          setCurrentPage(newPage);
          gsap.to(productListRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power3.inOut",
          });
        },
      });
    }
  };

  useEffect(() => {
    // Resetar para a primeira página ao trocar de dispositivo
    setCurrentPage(0);
  }, [isMobile]);

  const currentProducts = products.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  return (
    <div>
      <div
        ref={productListRef}
        className={`${
          empty ? "flex mt-10" : "grid"
        } grid-cols-2 container mx-auto lg:grid-cols-3 gap-x-[2.14vw] gap-y-[4.17vh] lg:gap-y-[5vh]`}
      >
        {empty ? (
          <h1 className="text-2xl md:text-4xl text-center mx-auto">Em Breve</h1>
        ) : (
          currentProducts.map((product: Product, index: number) => (
            <Link
              href={`/collection/${collection}-viert/product/${product.entryId}`}
              key={index}
              className="z-[999]"
            >
              <ProductCard key={index} product={product} />
            </Link>
          ))
        )}
      </div>

      {!empty && (
        <div className="flex justify-center mt-10">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`px-4 py-2 mx-1 ${
                index === currentPage ? "bg-black text-white" : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
