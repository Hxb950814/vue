import { redirectMake } from "../tools";
import Layout from "@/views/layout/Layout.vue";

const groupId = "05"; // 大id

/* 资料模块的路由 */
export default [
  redirectMake("/data_manage", "/data_manage/index"),
  {
    path: "/data_manage",
    component: Layout,
    meta: {
      title: "资料模块"
    },
    children: [
      {
        meta: {
          groupId,
          title: "资料模块"
        },
        path: "index", // 欢迎页
        component: (resolve:any) =>(require(["@/views/data-manage/index.vue"],resolve))
      }
    ]
  }
];
