import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { ProductCard } from '../ProductCard-component';
import { Product } from '@/interfaces/contetfulData';
import gsap from 'gsap';
import { useApp } from '@/context/AppContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type ProductListProps = {
  products: Product[];
  collection: 'festas' | 'noivas';
};

const ProductList: React.FC<ProductListProps> = ({
  products,
  collection,
}) => {
  const {
    device: { isMobile },
  } = useApp();
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOrder, setSortOrder] = useState<'price-asc' | 'price-desc'>('price-asc');
  const [filterOption, setFilterOption] = useState<string>(''); // Filtro por categoria
  const productListRef = useRef<HTMLDivElement | null>(null);
  
  const productsPerPage = isMobile ? 8 : 12;

  const empty = products.length === 0;

  const handlePageChange = (newPage: number) => {
    if (productListRef.current) {
      gsap.to(productListRef.current, {
        opacity: 0,
        x: -100,
        duration: 0.5,
        ease: 'power3.inOut',
        onComplete: () => {
          setCurrentPage(newPage);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          gsap.to(productListRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: 'power3.inOut',
          });
        },
      });
    }
  };

  // Lista de categorias, com opção de "Todos os Produtos"
  const categories = [
    { id: 0, title: 'Todos os Produtos' },
    { id: 1, title: 'Flor' },
    { id: 2, title: 'Rasteira' },
    { id: 3, title: 'Salto' },
    { id: 4, title: 'Regata' },
    { id: 5, title: 'Blusa' },
    { id: 6, title: 'Calça' },
    { id: 7, title: 'Body' },
    { id: 8, title: 'Saia' },
    { id: 9, title: 'Blazer' },
    { id: 10, title: 'Casaco' },
    { id: 11, title: 'Slip Dress' },
    { id: 12, title: 'Vestido' },
    { id: 13, title: 'Terno' },
  ];

  useEffect(() => {
    // Resetar para a primeira página ao trocar de categoria ou dispositivo
    setCurrentPage(0);
  }, [filterOption, isMobile]);

  // Filtrar os produtos pelo título com base na categoria selecionada
  const filteredProducts = filterOption && filterOption !== 'Todos os Produtos'
    ? products.filter((product) =>
        product.name.toLowerCase().includes(filterOption.toLowerCase()),
      )
    : products;

  // Ordenar os produtos
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === 'price-asc') {
      return a.price - b.price;
    } else if (sortOrder === 'price-desc') {
      return b.price - a.price;
    }
    return 0;
  });

  // Atualizar o número total de páginas com base nos produtos filtrados
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  // Produtos da página atual
  const currentProducts = sortedProducts.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage,
  );

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex justify-between flex-col gap-2 md:flex-row">
        {/* Filtro por categoria */}
        <div className="flex justify-between md:justify-center gap-3 items-center">
          <span>Filtrar por Categoria</span>
          <Select onValueChange={(value) => setFilterOption(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione uma categoria" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.title}>
                  {category.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Ordenação por preço */}
        <div className="flex justify-between md:justify-center gap-3 items-center">
          <span>Ordenar por</span>
          <Select onValueChange={(value) => setSortOrder(value as 'price-asc' | 'price-desc')}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Ordenar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-asc">Menor Preço</SelectItem>
              <SelectItem value="price-desc">Maior Preço</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Lista de Produtos */}
      <div
        ref={productListRef}
        className={`${
          empty ? 'flex mt-10' : 'grid'
        } grid-cols-2 container mx-auto lg:grid-cols-3 gap-x-[2.14vw] gap-y-[4.17vh] lg:gap-y-[5vh]`}
      >
        {empty ? (
          <h1 className="text-2xl md:text-4xl text-center mx-auto">
            Em Breve
          </h1>
        ) : (
          currentProducts.map(
            (product: Product, index: number) => (
              <Link
                href={`/collection/${collection}-viert/product/${product.entryId}`}
                key={index}
                className="z-[999]"
              >
                <ProductCard key={index} product={product} />
              </Link>
            ),
          )
        )}
      </div>

      {/* Paginação */}
      {!empty && (
        <div className="flex justify-center mt-10">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`px-4 py-2 mx-1 ${
                index === currentPage
                  ? 'bg-black text-white'
                  : 'bg-gray-200'
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
