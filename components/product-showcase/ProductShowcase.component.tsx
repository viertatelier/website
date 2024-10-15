import React, { useCallback, useEffect, useState } from 'react';
import styles from './ProductShowcase.module.scss';
import { Infos, Pictures } from './components';
import { getYampiProductImages } from '@/services/useYampiData';
import { ProductYampi, Sku } from '@/interfaces/contetfulData';

type ProductShowcaseProps = {
  product: ProductYampi;
};

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  product,
}) => {
  if (!product) return null;

  const images = product.images.data.map(
    (image) => image.large.url,
  );

  const colors = product.sku
    .map((sku) => {
      return (sku as Sku).variations.find(
        (variation) => variation.name === 'Cor',
      )?.value;
    })
    .filter(
      (value, index, self) => self.indexOf(value) === index,
    );

  const sizes = product.sku
    .map((sku) => {
      return (sku as Sku).variations.find(
        (variation) => variation.name === 'Tamanho',
      )?.value;
    })
    .filter(
      (value, index, self) => self.indexOf(value) === index,
    );

  return (
    <div className={styles.product}>
      <Pictures images={images} />
      <Infos
        description={product.name} // TODO: ACHAR A DESCRIÇÃO DO PRODUTO
        name={product.name}
        price={(product.sku as Sku[])[0].price_sale}
        colors={colors as string[]}
        sizes={sizes as string[]}
      />
    </div>
  );
};

export default ProductShowcase;
