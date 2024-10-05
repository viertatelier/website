import { BreadCrumb } from '@/components/breadcrumb-component';
import { ProductShowcase } from '@/components/product-showcase';
import { productName } from '@/utils/treatedData';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
type ProductSectionProps = {
  product: any;
}


const ProductSection: React.FC<ProductSectionProps> = ({product}) => {
  const { isFallback, query } = useRouter();
  const { entryId } = query;
  const [name, setName] = useState<string>('');

  useEffect(() => {
    if (!product) return;
    const prodName = productName(product as any);
    setName(prodName);
  }, []);
  
  
  if (isFallback) {
    return <div>Loading...</div>; // Adicione um loading para o fallback
  }

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <BreadCrumb />
      <ProductShowcase entryId={entryId} />
    </>
  );
};

export default ProductSection;
