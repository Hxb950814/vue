<template>
  <header class="app-header clearfix">
    <div class="l-part">
      <a class="image-icon" href="/">
        <img src="@assets/images/head_icon.jpg" width="50" alt="logo" />
      </a>

      <span class="welcome-text">
        欢迎 {{ userName }} 进入{{ moduleName || "Hxb世界" }}，祝您一生平安！
      </span>
    </div>

    <ul class="right-menu">
      <li class="item" @click="safeExit">
        安全退出
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import { Component, Provide, Watch, Vue } from "vue-property-decorator";
import { Route } from "vue-router";
import { HomeModule } from "@/store/modules/user/home";

@Component
export default class Headbar extends Vue {
  moduleName = "";
  userName = "";

  mounted() {
    this.userName = HomeModule.getName;
  }

  beforeDestroy() {}

  // 路由发生了变化，重新渲染路由
  @Watch("$route")
  onRouterChange(route: Route) {}
  /* 登出 */
  safeExit() {
    window.location.href = "/login";
    localStorage.removeItem("vuexData");
  }
}
</script>

<style lang="scss" scoped></style>
