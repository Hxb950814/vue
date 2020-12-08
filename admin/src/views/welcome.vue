<!-- 欢迎页面 -->
<template>
  <div class="container">
    <headbar />
    <div class="blocks-wrapper">
      <div class="blocks-wrapper-inner">
        <div class="block-union" @click="clickModule('02')">
          <div class="image-wrap">
            <img src="@assets/images/head_icon.jpg" alt="" />
          </div>
          <div class="text">
            用户
          </div>
        </div>
        <div class="block-union" @click="clickModule('03')">
          <div class="image-wrap">
            <img src="//rs.tanxingk.com/images/main_sec2.png" alt="" />
          </div>
          <div class="text">
            统计
          </div>
        </div>
        <div class="block-union" @click="clickModule('04')">
          <div class="image-wrap">
            <img src="//rs.tanxingk.com/images/main_sec3.png" alt="" />
          </div>
          <div class="text">
            信息
          </div>
        </div>
        <div class="block-union" @click="clickModule('05')">
          <div class="image-wrap">
            <img src="//rs.tanxingk.com/images/main_sec4.png" alt="" />
          </div>
          <div class="text">
            资料
          </div>
        </div>
        <div class="block-union" @click="clickModule('06')">
          <div class="image-wrap">
            <img src="//rs.tanxingk.com/images/main_sec5.png" alt="" />
          </div>
          <div class="text">
            背景
          </div>
        </div>
        <div class="block-union" @click="clickModule('07')">
          <div class="image-wrap">
            <img src="//rs.tanxingk.com/images/main_sec6.png" alt="" />
          </div>
          <div class="text">
            图片
          </div>
        </div>
        <div class="block-union" @click="clickModule('08')">
          <div class="image-wrap">
            <img src="//rs.tanxingk.com/images/main_sec7.png" alt="" />
          </div>
          <div class="text">
            账户
          </div>
        </div>
        <div class="block-union" @click="clickModule('09')">
          <div class="image-wrap">
            <img src="//rs.tanxingk.com/images/main_sec8.png" alt="" />
          </div>
          <div class="text">
            权限
          </div>
        </div>
        <div class="block-union empty" />
        <div class="block-union empty" />
        <div class="block-union empty" />
        <div class="block-union empty" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Headbar } from "@/views/layout/components/index";
import mapsRouterData from "@/router/maps";
import { HomeModule } from "@/store/modules/user/home";

@Component({
  components: {
    Headbar
  }
})
export default class Welcome extends Vue {
  token = ""; // 用户token
  name = ""; // 用户姓名
  mounted() {
    this.token = HomeModule.getToken;
    this.name = HomeModule.getName;
  }

  clickModule(id: string) {
    HomeModule.setToken(this.token);
    HomeModule.setName(this.name);
    HomeModule.setModuleId(id);
    const secModuleMap = mapsRouterData.find((item: any) => {
      return String(item.id) === String(id);
    });
    if (secModuleMap) {
      this.$router.push({
        path: secModuleMap.defaultLink,
        query: {
          mId: id
        }
      });
      location.href = secModuleMap.defaultLink + "?mId=" + id;
    } else {
      // @ts-ignore
      this.$message({
        type: "info",
        message: "敬请期待"
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  position: static;
}

.container {
  background: #fff;
  height: 100vh;
}

.blocks-wrapper {
  height: calc(100vh - 70px);
  overflow: auto;
  padding-top: 90px;

  .blocks-wrapper-inner {
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    max-width: 1300px;
    padding: 0 20px;
  }
}

.block-union {
  &.empty {
    border: none;
    height: 0;
  }

  &:hover {
    .image-wrap img {
      opacity: 1;
    }
  }

  width: calc((100% - 60px) / 4); // 间距20px 四等分
  @media screen and (max-width: 820px) {
    width: calc((100% - 40px) / 3);
  }
  @media screen and (max-width: 650px) {
    width: calc((100% - 20px) / 2);
  }
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid rgb(211, 211, 211);
  margin-bottom: 20px;
  cursor: pointer;

  .image-wrap {
    width: auto;

    img {
      opacity: 0.7;
      width: 100%;
      height: 200px;
      border: none;
    }
  }

  .text {
    user-select: none;
    line-height: 50px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: rgb(26, 126, 248);
  }
}
</style>
