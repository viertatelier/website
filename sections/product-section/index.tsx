import { BreadCrumb } from '@/components/breadcrumb-component';
import { ProductShowcase } from '@/components/product-showcase';
import { ProductYampi } from '@/interfaces/contetfulData';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
type ProductSectionProps = {
  product: ProductYampi;
};

const ProductSection: React.FC<ProductSectionProps> = ({
  product,
}) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <div>Loading...</div>; // Adicione um loading para o fallback
  }

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <BreadCrumb />
      <ProductShowcase product={product} />
    </>
  );
};

export default ProductSection;
