import { redirectMake } from "../tools";
import Layout from "@/views/layout/Layout.vue";

const groupId = "02"; // 大id

/* 信息模块的路由 */
export default [
  redirectMake("/information_manage", "/information_manage/index"),
  {
    path: "/information_manage",
    component: Layout,
    meta: {
      title: "信息模块"
    },
    children: [
      {
        meta: {
          groupId,
          title: "信息模块"
        },
        path: "index", // 欢迎页
        component: () => import("@/views/information-manage/index.vue")
      }
    ]
  }
];
