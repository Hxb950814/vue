import { redirectMake } from "../tools";
import Layout from "@/views/layout/Layout.vue";

const groupId = "09"; // 大id

/* 权限模块的路由 */
export default [
  redirectMake("/jurisdiction_manage", "/jurisdiction_manage/index"),
  {
    path: "/jurisdiction_manage",
    component: Layout,
    meta: {
      title: "权限模块"
    },
    children: [
      {
        meta: {
          groupId,
          title: "权限模块"
        },
        path: "index", // 欢迎页
        component: () => import("@/views/jurisdiction-manage/index.vue")
      }
    ]
  }
];
