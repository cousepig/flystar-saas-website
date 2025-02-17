import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },

  {
    id: 3,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Microphone",
        path: "/products/microphone",
        newTab: false,
      },
      {
        id: 32,
        title: "Mixer",
        path: "/products/mixer",
        newTab: false,
      },
      {
        id: 33,
        title: "Processor",
        path: "/products/processor",
        newTab: false,
      },
      {
        id: 34,
        title: "Amplifier",
        path: "/products/amplifier",
        newTab: false,
      },
      {
        id: 35,
        title: "Speaker",
        path: "/products/speaker",
        newTab: false,
      },
      {
        id: 36,
        title: "Electronics",
        path: "/products/electronics",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Case Studies",
    path: "/showcase",
    newTab: false,
  },
  {
    id: 6,
    title: "News",
    path: "/blogs",
    newTab: false,
  },
  {
    id: 7,
    title: "Support",
    newTab: false,
    submenu: [
      {
        id: 71,
        title: "Contact Us",
        path: "/contact",
        newTab: false,
      },
      {
        id: 72,
        title: "Downloads",
        path: "/downloads",
        newTab: false,
      },
      {
        id: 72,
        title: "Serivce",
        path: "/support/service",
        newTab: false,
      },
    ],
  },
];
export default menuData;
