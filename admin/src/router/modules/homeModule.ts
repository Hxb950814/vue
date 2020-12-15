import { redirectMake } from "../tools";
import Layout from "@/views/layout/Layout.vue";

const groupId = "01"; // 大id

/* 借款管理路由 */
export default [
  redirectMake("/", "/welcome"),
  {
    meta: {
      groupId,
      title: "后台首页"
    },
    path: "/welcome",
    component: () => import("@/views/welcome.vue")
  }
];
