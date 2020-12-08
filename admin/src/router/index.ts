import Vue from "vue";
import Router, { Route } from "vue-router";
import homeModule from "./modules/homeModule"; // 基本模块
import userManageModule from "./modules/userManageModule"; // 用户
import statisticsManageModule from "./modules/statisticsManageModule"; // 统计模块
import infoManageModule from "./modules/infoManageModule"; // 信息模块
import dataManageModule from "./modules/dataManageModule"; // 资料模块
import aboutManageModule from "./modules/aboutManageModule"; // 背景模块
import imageManageModule from "./modules/imagesManageModule"; // 图片模块
import accountManageModule from "./modules/accountManageModule"; // 账户模块
import jurisdictionManageModule from "./modules/jurisdictionManageModule"; // 权限模块
if (!(window as any).VueRouter) {
  Vue.use(Router);
}

const constantRouterMap = [
  ...homeModule,
  ...userManageModule,
  ...statisticsManageModule,
  ...infoManageModule,
  ...dataManageModule,
  ...aboutManageModule,
  ...imageManageModule,
  ...accountManageModule,
  ...jurisdictionManageModule,
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue")
  },
  {
    path: "*",
    component: () => import("../views/404.vue")
  }
];
const router = new Router({
  mode: "hash", // 线上用history模式
  // base: "/",
  scrollBehavior: () => ({
    x: 0,
    y: 0
  }),
  routes: constantRouterMap
});
router.beforeEach((to: Route, from: Route, next: any) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
