import React, { useCallback, useEffect, useState } from "react";
import { Product } from "@/interfaces/contetfulData";
import { getSingleEntry } from "@/services/useContentfulData";
import styles from "./ProductShowcase.module.scss";
import { Infos, Pictures } from "./components";
import { treatProduct } from "@/utils/treatedData";

type ProductShowcaseProps = {
  entryId: string | string[] | undefined;
};

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ entryId }) => {
  const [product, setProduct] = useState<Product | null>(null);

  const getProduct = useCallback(async () => {
    if (!entryId || Array.isArray(entryId)) return;
    const prod = await getSingleEntry({ entryId });
    const treatedProd = treatProduct(prod as any);
    setProduct(treatedProd);
  }, [entryId]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  if (product)
    return (
      <div className={styles.product}>
        <Pictures images={product?.images!} />
        <Infos infos={product} />
      </div>
    );
  else <></>;
};

export default ProductShowcase;
