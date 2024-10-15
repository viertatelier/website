import React, { useCallback, useEffect, useState } from 'react';
import styles from './ProductShowcase.module.scss';
import { Infos, Pictures } from './components';
import { getYampiProductImages } from '@/services/useYampiData';

type ProductShowcaseProps = {
  product: any;
};

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  product,
}) => {
  console.log('product', product);
  const [images, setImages] = useState<string[]>([]);

  const fetchAllSkus = useCallback(async () => {
    if (!product.skus || product.skus?.length === 0) {
      const image = await getYampiProductImages({
        sku: product.sku,
      });
      console.log('image', image);
      setImages(image.data);
    } else {
      product.skus.map(async (sku: string) => {
        const images = await getYampiProductImages({
          sku,
        });

        console.log('images', images);
        setImages(images.data);
      });
    }
  }, [product]);

  useEffect(() => {
    fetchAllSkus();
  }, [fetchAllSkus]);

  if (!product) return null;

  return (
    <div className={styles.product}>
      <Pictures images={images} />
      <Infos
        description={product.description}
        name={product.title}
        price={product.price}
        colors={product.colors}
      />
    </div>
  );
};

export default ProductShowcase;
