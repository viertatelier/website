/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

interface TwitterMetatagInterface {
  card: 'summary';
  title?: string;
  description?: string;
  site?: string;
  imageAlt?: string;
  image: string;
}

interface FacebookMetatagInterface {
  type: 'website';
  title?: string;
  description?: string;
  app_id?: string;
  imageAlt?: string;
  image: string;
  imageWidth: '1200';
  imageHeight: '630';
}

export interface MetaType {
  title: string;
  description: string;
  url: string;
  heading: string;
  brandName?: string;
  twitter: TwitterMetatagInterface;
  facebook: FacebookMetatagInterface;
  image: string;
  imageAlt: string;
  productName: string;
  keywords: string;
  author: {
    name: string;
    href: string;
  }
}

export type AnimationType =
  | 'top'
  | 'slide-in'
  | 'scale'
  | 'fade-in';

export interface AccessibilityProps {
  alt?: string;
  title?: string;
  ariaLabel?: string;
  caption?: string;
  transcript?: string;
}
