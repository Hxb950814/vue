<template>
  <div>
    <h2 class="hbb-page-title">自我测试页面</h2>
    <canvas id="myCanvas" width="300px" height="300px"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class extends Vue {
  mounted() {
    this.init();
  }

  init() {
    const c = $("#myCanvas")[0];
    const ctx = c.getContext("2d");
    console.log(c); // 400
    console.log(ctx); // CanvasRenderingContext2D对象
    console.log(c.width); // 400
    console.log(c.height); // 400
  }
}
</script>

<style lang="scss" scoped>
.hbb-page-title {
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100px;
  align-items: center;
  font-size: 26px;
}
</style>
