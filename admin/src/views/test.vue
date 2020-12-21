<template>
  <div>
    <h2 class="hbb-page-title">自我测试页面</h2>
    <!--    <canvas id="myCanvas" width="300px" height="300px"></canvas>-->

    <el-button @click="listPush">11</el-button>
    <div
      ref="test"
      style="margin:0 auto;width: 300px;height: 200px;overflow:auto;background:#eee;"
    >
      <div v-for="item in list" :key="item">{{ item }}</div>
    </div>
    <A :mode="mode">111</A>
    <B>222</B>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import A from "./test/a.vue";
import B from "./test/b.vue";
@Component({
  components: {
    A,
    B
  }
})
export default class extends Vue {
  list: any[] = [];
  mode = "mode";

  mounted() {
    this.init();
    setTimeout(() => {
      this.list = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ];
    }, 1000);
  }

  init() {
    // const c = $("#myCanvas")[0];
    // const ctx = c.getContext("2d");
    // console.log(c); // 400
    // console.log(ctx); // CanvasRenderingContext2D对象
    // console.log(c.width); // 400
    // console.log(c.height); // 400
  }

  @Provide()
  sex = "Inject接受";

  listPush() {
    this.list.push(4);
  }

  updated() {
    console.log("页面dome更新完毕哦");
    (this.$refs.test as any).scrollTop = (this.$refs.test as any).clientHeight;
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
.item {
  display: flex;
}
</style>
