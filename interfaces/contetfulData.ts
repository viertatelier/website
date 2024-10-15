interface SpaceSys {
  type: string;
  linkType: string;
  id: string;
}

interface Space {
  sys: SpaceSys;
}

interface EnvironmentSys {
  id: string;
  type: string;
  linkType: string;
}

interface Environment {
  sys: EnvironmentSys;
}

interface ContentTypeSys {
  type: string;
  linkType: string;
  id: string;
}

interface ContentType {
  sys: ContentTypeSys;
}

interface Sys {
  space: Space;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Environment;
  revision: number;
  contentType: ContentType;
  locale: string | undefined;
}

interface FileDetailsImage {
  width: number;
  height: number;
}

interface FileDetails {
  size: number;
  image: FileDetailsImage;
}

interface File {
  url: string;
  details: FileDetails;
  fileName: string;
  contentType: string;
}

interface ImageFields {
  title: string;
  description: string;
  file: File;
}

interface Image {
  metadata: Metadata;
  sys: Sys;
  fields: ImageFields;
}

interface Metadata {
  tags: any[];
}

interface Fields {
  collection: string;
  name: string;
  description: string;
  price: number;
  sizes: number[];
  colors: string[];
  images: Image[];
}

export interface EntryProps {
  metadata: Metadata;
  sys: Sys;
  fields: Fields;
}

export interface Product {
  collection: 'Viert Festas' | 'Viert Noivas';
  description: any;
  sizes: (34 | 35 | 36 | 37 | 38 | 39 | 40 | 42 | 44 | 46)[];
  entryId: string;
  images: string[];
  price: number;
  name: string;
  colors: string[];
}
export interface Products {
  products: Product[];
}

interface ProductImage {
  id: number;
  processed: boolean;
  name: string;
  order: number;
  extension: string | null;
  filter_image_url: string | null;
  small: ImageSize;
  thumb: ImageSize;
  medium: ImageSize;
  large: ImageSize;
}

interface ImageSize {
  width: number;
  height: number;
  url: string;
}

interface Variation {
  name: string;
  id: number;
  value: string;
  value_id: number;
}

export interface Sku {
  id: number;
  product_id: number;
  seller_id: number | null;
  sku: string;
  token: string;
  erp_id: number | null;
  blocked_sale: boolean;
  barcode: string | null;
  title: string;
  availability: number;
  availability_soldout: number;
  days_availability_formated: string;
  price_cost: number;
  price_sale: number;
  price_discount: number;
  width: number;
  height: number;
  length: number;
  weight: number;
  quantity_managed: boolean;
  variations: Variation[];
  combinations: string;
  order: number;
  total_in_stock: number;
  total_orders: number | null;
  allow_sell_without_customization: boolean;
  image_reference_sku_id: number | null;
  purchase_url: string;
  created_at: {
    date: string;
    timezone_type: number;
    timezone: string;
  };
  updated_at: {
    date: string;
    timezone_type: number;
    timezone: string;
  };
  customizations: {
    data: any[]; // Defina o tipo de acordo com o que você espera receber
  };
}
export interface ProductYampi {
  relevance: null;
  id: number;
  merchant_id: number;
  seller_id: number | null;
  affiliation_id: number | null;
  active: boolean;
  gift_value: string;
  searchable: boolean;
  simple: boolean;
  erp_id: number | null;
  ncm: number | null;
  has_variations: boolean;
  is_digital: boolean;
  warranty: number;
  custom_shipping: boolean;
  shipping_price: string;
  name: string;
  slug: string;
  sku: string[] | Sku[];
  rating: number;
  priority: number;
  url: string;
  redirect_url_card: string | null;
  redirect_url_billet: string | null;
  preview_url: string;
  images: {
    data: ProductImage[];
  };
}

export interface YampiResponse {
  data: ProductYampi[];
  meta: {
    pagination: {
      total: number;
      count: number;
      per_page: number;
      current_page: number;
      total_pages: number;
      links: Record<string, unknown>; // Aqui, você pode definir melhor se souber a estrutura exata
    };
  };
}
