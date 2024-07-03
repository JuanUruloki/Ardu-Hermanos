import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "HOME",
    path: "/",
    newTab: false,
  },
  
  {
    id: 4,
    title: "PRODUCTOS",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "PLANTAS POTABILIZADORAS",
        path: "/plantasPotabilizadoras",
        newTab: false,
      },
      {
        id: 42,
        title: "INDUSTRIAS",
        path: "/industrias",
        newTab: false,
      },
      {
        id: 43,
        title: "PILETAS",
        path: "/piletas",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "EMPRESA",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "CONTACTO",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
