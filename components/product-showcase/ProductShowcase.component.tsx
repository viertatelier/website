import React from 'react';
import styles from './ProductShowcase.module.scss';
import { Infos, Pictures } from './components';
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
  
   const prices = product.sku.map((sku) => {
    return (sku as Sku).price_sale;
  });

  const minPrice = Math.min(...prices);

  console.log('product', JSON.stringify(product, null, 2));

  // const description = 

  return (
    <div className={styles.product}>
      <Pictures images={images} />
      <Infos
        description={product.name} // TODO: ACHAR A DESCRIÇÃO DO PRODUTO
        name={product.name}
        price={minPrice}
        colors={colors as string[]}
        sizes={sizes as string[]}
      />
    </div>
  );
};

export default ProductShowcase;
