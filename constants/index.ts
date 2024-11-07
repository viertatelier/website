import { MetaType } from '@models/index';
import {
  ProjectBrand,
  ProjectInfoInterface,
  ProjectType,
} from '@models/ProjectInfo';

export const BRAND_NAME = 'VIERT ATELIER';
export const PRODUCT_NAME = 'Viert Atelier';
export const SITE_URL = 'https://viertatelier.com';
export const PAGE_TITLE = `${BRAND_NAME}`;

export const project: ProjectInfoInterface = {
  year: '2025',
  version: '1.0',
  debug: true,
  product: 'viert-atelier',
  brand: ProjectBrand.VIERT,
  type: ProjectType.LANDING_PAGE,
  url: SITE_URL,
};

export const metaTags: MetaType = {
  description:
    'Viert Atelier é um atelier de moda especializado em vestidos de noiva, festa e sob medida.',
  heading:
    'Viert Atelier é um atelier de moda especializado em vestidos de noiva, festa e sob medida.',
  title: 'Viert Atelier',
  brandName: 'Viert Atelier',
  productName: 'Viert Atelier',
  image: `${process.env.BASE_URL}og-image.png`,
  twitter: {
    card: 'summary',
    site: '@viert_atelier',
    imageAlt: 'Viert Atelier',
    image: `${process.env.BASE_URL}og-image.png`,
  },
  facebook: {
    type: 'website',
    image: `${process.env.BASE_URL}og-image.png`,
    imageAlt: 'Viert Atelier',
    imageWidth: '1200',
    imageHeight: '630',
  },
  url: SITE_URL,
  imageAlt: 'Viert Atelier',
  keywords:
    'viert, atelier, moda, vestido, noiva, casamento, festa, roupas, Festa, Noiva, Sob Medida, Vestido de Festa, Casamento, Casamento Civil, Mini Casamento, Wedding, Mini Wedding, 15 anos, Madrinha, Vestido de Noiva, Mãe da Noiva, Vestidos Sob Medida, Vestidos Personalizados, Vestidos de Alta Costura, Vestidos Exclusivos, Vestidos para Eventos Especiais, Moda Nupcial, Vestidos para Madrinhas, Vestidos para Daminhas, Vestidos de Gala, Vestidos de Formatura, Estilo Único, Design Exclusivo, Alta Costura para Noivas, Moda Festa Personalizada, Vestido de Noiva Único, Atelier de Vestidos, Vestido Feito Sob Medida, Vestido de Noiva Sob Medida, Vestidos de Festa, Personalizados, Atelier de Moda Nupcial, Vestidos de Noiva Personalizados em São Paulo, Vestidos de Festa Sob Medida no Brasil, Atelier de Moda Exclusiva para Casamentos, Vestidos para Casamento Civil Personalizados, Design de Vestidos de Noiva Único e Autoral, Vestidos de Madrinha Sob Medida em São Paulo, Vestidos de 15 anos com Design Exclusivo, Moda Personalizada para Casamentos e Festas, Vestido de Mãe da Noiva Sob Medida, Vestidos de Mini Wedding Exclusivos, Casamento Religioso, Casamento Católico, Casamento Judaico, Atelier, Vestidos de Noiva, Vestidos de Festa, Sob Medida, Sob Encomenda, Carol Hungria, Alta Costura, Moda, Gávea, Rio de Janeiro, LIFE Noiva, Martu, Martha Medeiros, Majeste, Ateliê, Aline Feltes, VESTIDOS ÚNICOS, Confecção de vestidos, Vestidos Exclusivos, Le Blanche Noivas, Desenho e confecção, madrinha, damas de honra, pajem, Glamour, Original, Sonho, noivas, madrinhas, formandas, debutantes,  convidadas, bar mitzvah, bat mitzvah, Lili Carvalho, Estilista, Designer, Maria Bonita, tecidos nobres, rendas, Plissê, Flores de tecido, pintura à mão, Fafi Vasconcellos, vestido personalizado, charme, Maria Karin, organza, seda, tule, maison deloree, nova noiva, Atendimento Exclusivo,  Diferenciado, luxo, Carlos Bacchi, eduarda galvani, julia pak, rebeca nepomuceno, bridal, lucas anderi, wanda borges, Vanessa Abbud,sandra barros, isabella narchi, Emannuelle Junqueira, decote, casamento, roupas, Vestido de festa online, Vestido de Noiva online',
  author: {
    name: 'Majors Solutions',
    href: 'https://www.majorssolutions.com.br',
  },
};

export const brandLinks = {
    mainUrl: 'https://viertatelier.com',
    instagram: 'https://www.instagram.com/viert_atelier',
    whatsapp: 'https://wa.me/5521967502610',
  


//   privacyPolicy:
//     'https://www.fiat.com.br/politica-de-privacidade.html',
//   twitter: 'https://www.instagram.com/fiatbr',
//   facebook: 'https://www.facebook.com/fiatbr',
//   youtube: 'https://www.youtube.com/@fiatbr',
};
