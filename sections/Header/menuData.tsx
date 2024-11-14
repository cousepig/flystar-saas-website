import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "首页",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "关于",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "产品中心",
    path: "/products",
    newTab: false,
  },
  {
    id: 4,
    title: "工程案例",
    path: "/showcase",
    newTab: false,
  },
  // {
  //   id: 5,
  //   title: "价格",
  //   path: "/pricing",
  //   newTab: false,
  // },
  {
    id: 6,
    title: "新闻资讯",
    path: "/blog",
    newTab: false,
  },
  {
    id: 7,
    title: "联系我们",
    path: "/contact",
    newTab: false,
  },
  // {
  //   id: 6,
  //   title: "表单",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 61,
  //       title: "Collob",
  //       path: "/",
  //       newTab: false,
  //     },
  //     {
  //       id: 62,
  //       title: "Design",
  //       path: "/",
  //       newTab: false,
  //     },
  //     {
  //       id: 63,
  //       title: "Webco",
  //       path: "/",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
