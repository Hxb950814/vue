import { redirectMake } from "../tools";
import Layout from "@/views/layout/Layout.vue";

const groupId = "07"; // 大id

/* 图片模块的路由 */
export default [
  redirectMake("/picture_manage", "/picture_manage/index"),
  {
    path: "/picture_manage",
    component: Layout,
    meta: {
      title: "图片模块"
    },
    children: [
      {
        meta: {
          groupId,
          title: "图片模块"
        },
        path: "index", // 欢迎页
        component: () => import("@/views/picture-manage/index.vue")
      }
    ]
  }
];
