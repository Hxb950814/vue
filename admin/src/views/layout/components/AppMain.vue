<template>
  <div id="appMainArea" class="app-main-area">
    <div class="app-content">
      <my-breadcrumb />
      <section class="main-format-section">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
        <div class="text-center" v-show="!token">
          <span class="text">您没有该页面的访问权限</span><br />
          <a class="back-btn" @click="clickLogin">返回登录</a>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import { Route } from "vue-router";
import MyBreadcrumb from "@/components/MyBreadcrumb/MyBreadcrumb.vue";
import { HomeModule } from "@/store/modules/user/home";

@Component({
  components: { MyBreadcrumb }
})
export default class AppMain extends Vue {
  token = "";

  created() {}

  mounted() {
    this.token = HomeModule.getToken;
  }

  // 路由发生了变化，重新渲染路由
  @Watch("$route")
  onRouterChange(route: Route) {}

  clickLogin() {
    window.location.href = "/login";
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
 {
  opacity: 0;
}

.text-center {
  background-color: #fff;
  height: 100%;
  text-align: left;
  padding-left: 20px;
  padding-bottom: 20px;
  margin-right: 10px;

  .text {
    display: inline-block;
    font-size: 20px;
    padding-top: 20px;
  }

  .page-table-btn {
    margin-top: 10px;
  }
}

.crop {
  font-size: 14px;
  color: #535b6c;
  padding-left: 25px;
  line-height: 60px;
}

.back-btn {
  display: inline-block;
  margin-top: 10px;
  border: 1px solid $theme-font-color;
  color: $theme-font-color;
  font-size: 14px;
  border-radius: 4px;
  padding: 3px 10px;
  cursor: pointer;

  &:hover {
    border: 1px solid $theme-font-color;
    background-color: $theme-font-color;
    color: #fff;
  }
}
</style>
