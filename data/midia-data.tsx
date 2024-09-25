import { brandLinks } from '@/constants';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const midia_data = [
  {
    id: 0,
    title: 'Instagram',
    icon: <FaInstagram />,
    link: brandLinks.instagram,
  },
  {
    id: 1,
    title: 'Whatsapp',
    icon: <FaWhatsapp />,
    link: brandLinks.whatsapp,
  },
];
