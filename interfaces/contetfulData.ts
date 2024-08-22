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
  collection: "Viert Festas" | "Viert Noivas";
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
