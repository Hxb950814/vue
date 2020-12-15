import { redirectMake } from "../tools";
import Layout from "@/views/layout/Layout.vue";

const groupId = "08"; // 大id

/* 账户模块的路由 */
export default [
  redirectMake("/account_manage", "/account_manage/index"),
  {
    path: "/account_manage",
    component: Layout,
    meta: {
      title: "账户模块"
    },
    children: [
      {
        meta: {
          groupId,
          title: "账户模块"
        },
        path: "index", // 欢迎页
        component: () => import("@/views/account-manage/index.vue")
      }
    ]
  }
];
