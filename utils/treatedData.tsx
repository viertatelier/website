import { EntryProps, Product } from "@/interfaces/contetfulData";


export const productName = (product: EntryProps): string => {
  return product.fields.name;
}


export const treatProduct = (product: EntryProps): Product => {
  const treatedProducts = {
    collection: product.fields.collection as "Viert Festas" | "Viert Noivas",
    name: product.fields.name,
    description: product.fields.description,
    price: product.fields.price,
    sizes: product.fields.sizes as (34 | 35 | 36 | 37 | 38 | 39 | 40 | 42 | 44 | 46)[],
    colors: product.fields.colors,
    images: product.fields.images!.map(
      (image) => "https:" + image.fields.file.url
    ),
    entryId: product.sys.id,
  };

  return treatedProducts;
};

export const treatProducts = (allProducts: EntryProps[]): Product[] => {
  const treatedProducts = allProducts.map((entry) => {
    return {
      collection: entry.fields.collection as "Viert Festas" | "Viert Noivas",
      name: entry.fields.name,
      description: entry.fields.description,
      price: entry.fields.price,
      sizes: entry.fields.sizes as (34 | 35 | 36 | 37 | 38 | 39 | 40 | 42 | 44 | 46)[] ?? [],
      colors: entry.fields.colors,
      images: entry.fields.images!.map(
        (image) => "https:" + image.fields.file.url
      ),
      entryId: entry.sys.id,
    };
  });

  return treatedProducts;
};

