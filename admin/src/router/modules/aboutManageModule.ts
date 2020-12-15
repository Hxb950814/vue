import { redirectMake } from "../tools";
import Layout from "@/views/layout/Layout.vue";

const groupId = "06"; // 大id

/* 关于模块的路由 */
export default [
  redirectMake("/about_manage", "/about_manage/index"),
  {
    path: "/about_manage",
    component: Layout,
    meta: {
      title: "背景模块"
    },
    children: [
      {
        meta: {
          groupId,
          title: "背景模块"
        },
        path: "index", // 欢迎页
        component: () => import("@/views/about-manage/index.vue")
      }
    ]
  }
];
