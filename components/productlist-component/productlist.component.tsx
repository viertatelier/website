import Link from "next/link";
import React from "react";
import { ProductCard } from "../ProductCard-component";
import { Product } from "@/interfaces/contetfulData";

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div  className="grid grid-cols-2 container mx-auto lg:grid-cols-3 gap-x-[2.14vw] gap-y-[4.17vh] lg:gap-y-[5vh]">
      {products.map((product: Product, index: number) => (
        <Link
          href={`/collection/noivas-viert/product/${product.entryId}`}
          key={index}
          className="z-[999]"
        >
          <ProductCard key={index} product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
