import { redirectMake } from "../tools";
import Layout from "@/views/layout/Layout.vue";

const groupId = "04"; // 大id

/* 用户模块的路由 */
export default [
  redirectMake("/statistics_manage", "/statistics_manage/index"),
  {
    path: "/statistics_manage",
    component: Layout,
    meta: {
      title: "统计模块"
    },
    children: [
      {
        meta: {
          groupId,
          title: "统计模块"
        },
        path: "index", // 欢迎页
        component:(resolve:any) =>(require(["@/views/statistics-manage/index.vue"],resolve))
      }
    ]
  }
];
