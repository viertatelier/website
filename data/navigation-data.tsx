type NavigationDataProps = {
  id: number;
  title: string;
  url?: string;
  submenu?: NavigationDataProps[];
};

export const navigation_data: NavigationDataProps[] = [
  {
    id: 0,
    title: "Home",
    url: "/",
  },
  {
    id: 1,
    title: "Coleções",
    submenu: [
      {
        id: 0,
        title: "Festas Viert",
        url: "/collection/festas-viert",
      },
      {
        id: 1,
        title: "Noivas Viert",
        url: "/collection/noivas-viert",
      },
    ],
  },
  {
    id: 2,
    title: "Contato",
    url: "/#contact",
  },
];
