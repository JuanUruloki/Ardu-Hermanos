import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  
  {
    id: 4,
    title: "Productos",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Plantas potabilizadoras",
        path: "/plantasPotabilizadoras",
        newTab: false,
      },
      {
        id: 42,
        title: "Industrias",
        path: "/industrias",
        newTab: false,
      },
      {
        id: 43,
        title: "Piletas",
        path: "/piletas",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "Empresa",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Contacto",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
