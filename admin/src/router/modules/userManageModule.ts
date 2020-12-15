import { redirectMake } from "../tools";
import Layout from "@/views/layout/Layout.vue";

const groupId = "02"; // 大id

/* 用户模块的路由 */
export default [
  redirectMake("/user_manage", "/user_manage/index"),
  {
    path: "/user_manage",
    component: Layout,
    meta: {
      title: "用户模块"
    },
    children: [
      {
        meta: {
          groupId,
          title: "用户模块"
        },
        id: "0201",
        path: "index", // 欢迎页
        component: (resolve:any) =>(require(["@/views/user-manage/index.vue"],resolve))
      },
      {
        meta: {
          groupId,
          title: "全部用户"
        },
        id: "0201",
        path: "all/list", // 欢迎页
        component: (resolve:any) =>(require(["@/views/user-manage/all/list.vue"],resolve))
      },
      {
        meta: {
          groupId,
          title: "角色管理"
        },
        id: "0201",
        path: "manage/list", // 欢迎页
        component: (resolve: any) => (require(["@/views/user-manage/manage/list.vue"], resolve))
      }
    ]
  }
];
