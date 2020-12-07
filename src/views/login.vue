<!-- 登录页面 -->
<template>
  <div class="login-bg">
    <CanvasOne class="hbb-canvas"></CanvasOne>
    <div class="login-section">
      <p class="logo-title">
        韩小豹
      </p>
      <div class="login-block">
        <div class="show-pic">
          <img src="@assets/images/login-func.jpg" alt="" />
        </div>
        <div class="input-section">
          <div class="title">
            用户登录
          </div>
          <el-form ref="dataForm" class="" :model="editData" :rules="dataRules">
            <div class="input-line">
              <span class="label">账号</span>
              <el-form-item prop="username">
                <el-input
                  v-model.trim="editData.username"
                  type="text"
                  placeholder="请输入账号"
                  class="input-text"
                  autocomplete="false"
                  maxlength="10"
                  @keyup.enter.native="login"
                />
              </el-form-item>
            </div>
            <div class="input-line">
              <span class="label">密码</span>
              <el-form-item prop="password">
                <el-input
                  v-model.trim="editData.password"
                  type="password"
                  placeholder="请输入密码"
                  class="input-password"
                  autocomplete="false"
                  maxlength="12"
                  @keyup.enter.native="login"
                />
              </el-form-item>
            </div>
            <div class="input-line">
              <span class="label">验证码</span>
              <el-form-item prop="code">
                <el-input
                  v-model.trim="editData.code"
                  placeholder="请输入验证码"
                  type="text"
                  class="input-code"
                  maxlength="4"
                  autocomplete="false"
                  @keyup.enter.native="login"
                />
              </el-form-item>
              <img class="code-img" :src="codeImgSrc || ''" />
              <a class="refresh-btn" @click="getCode">刷新</a>
            </div>
            <div
              class="input-line"
              style="margin-top: 10px
        "
            >
              <span class="label" />
              <a class="forget-password">忘记密码？</a>
            </div>
            <div>
              <el-button
                class="login-btn"
                type="primary"
                :loading="isLogin"
                @click="login"
              >
                {{ isLogin ? "登录中" : "登录" }}
              </el-button>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ElForm } from "element-ui/types/form";
import CanvasOne from "@components/canvas/canvas-one.vue";
import config from "@/utils/config";
import { HomeModule } from "@/store/modules/user/home";

let codeTimeHandle = -1;

@Component({
  components: {
    CanvasOne
  }
})
export default class Login extends Vue {
  editData = {
    username: "韩小豹", // 用户名
    password: "123456", // 验证码
    code: "4567" // code
  };

  codeImgSrc = ""; // 图片验证码地址
  randomKey = ""; // code的key
  isLogin = false; // 是否登录中

  dataRules: any = {
    username: [{ required: true, message: "请输入账号", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
  };

  mounted() {
    // 如果存在token  则直接进入
    if (HomeModule.getToken) {
      location.href = "/welcome";
    }
  }

  beforeDestroy() {
    clearInterval(codeTimeHandle);
    codeTimeHandle = -1;
  }

  timeForGetCode() {
    if (codeTimeHandle) {
      clearInterval(codeTimeHandle);
    }
    codeTimeHandle = setInterval(() => {
      this.getCode();
    }, 1000 * 60);
    this.getCode();
  }

  /* 获取图片验证码 */
  async getCode() {}

  login() {
    (this.$refs.dataForm as ElForm).validate((valid: boolean) => {
      if (valid) {
        this.doLogin();
      }
    });
  }

  async doLogin() {
    if (this.editData.username !== config.userInfo.name) {
      // @ts-ignore
      this.$message({
        type: "error",
        message: "用户名错误"
      });
      return false;
    }
    if (this.editData.password !== config.userInfo.password) {
      // @ts-ignore
      this.$message({
        type: "error",
        message: "密码错误"
      });
      return false;
    }
    if (this.editData.code !== config.userInfo.code) {
      // @ts-ignore
      this.$message({
        type: "error",
        message: "验证码错误"
      });
      return false;
    }
    this.isLogin = true;
    // 登录成功存储token用于识别
    const startTime = Date.now();
    HomeModule.setToken("zsc" + startTime);
    HomeModule.setName(this.editData.username);
    setTimeout(() => {
      this.isLogin = false;
      location.href = "/welcome";
    }, 200);
  }
}
</script>

<style lang="scss" scoped>
.login-bg {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.hbb-canvas {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}

.login-section {
  position: relative;
  z-index: 99;
  padding-top: 160px;

  .logo-title {
    text-align: center;
    color: #005ccb;
    font-size: 34px;
    font-weight: bold;
  }
}

.login-block {
  width: 1100px;
  background: #fff;
  opacity: 0.8;
  border-radius: 5px;
  margin: 30px auto 0;
  display: flex;
  padding: 80px 40px;

  .el-form-item {
    display: inline-block;
  }

  .show-pic {
    margin-right: 120px;
    margin-left: 80px;
    padding-top: 35px;

    img {
      width: 360px;
      height: 320px;
    }
  }

  .input-section {
    box-shadow: rgb(203, 203, 203) 0 0 6px;
    padding: 0 25px 30px;
    border-radius: 5px;
    width: 370px;

    .title {
      text-align: center;
      font-size: 16px;
      line-height: 50px;
      border-bottom: 1px solid #fff;
    }

    .input-line {
      margin-top: 20px;

      &:nth-child(1) {
        margin-top: 30px;
      }

      .label {
        width: 50px;
        display: inline-block;
        margin-right: 10px;
        text-align: right;
        font-size: 14px;
      }

      .forget-password {
        font-size: 14px;
        color: $theme-font-color;
        cursor: pointer;
        user-select: none;
      }

      .input-text,
      .input-password {
        width: 260px;
      }

      .input-code {
        width: 140px;
      }

      .code-img {
        width: 70px;
        height: 42px;
        display: inline-block;
        margin: 0 10px;
      }

      .refresh-btn {
        display: inline-block;
        color: #1a7ef8;
        font-size: 14px;
        line-height: 42px;
        cursor: pointer;
        user-select: none;
      }
    }
  }

  .login-btn {
    width: 220px;
    height: 44px;
    margin-left: 60px;
    margin-top: 20px;
  }
}

/deep/ .input-password.el-input,
/deep/ .input-code.el-input,
/deep/ .input-text.el-input {
  height: 42px;

  .el-input__inner {
    border-color: #ccc;
    line-height: 42px;
    height: 42px;
    border-radius: 4px;
    padding-left: 14px;
    padding-right: 14px;
    font-size: 15px;
  }
}
</style>
