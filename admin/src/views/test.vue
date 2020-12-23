<template>
  <div>
    <h2 class="hbb-page-title">自我测试页面</h2>
    <!--    <canvas id="myCanvas" width="300px" height="300px"></canvas>-->

    <el-button @click="listPush">11</el-button>
    <el-button @click="copyArr">点击我进行拷贝数组</el-button>
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
import * as _ from "lodash";
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
  arr: any[] = [
    { id: 1, name: "计算机专业", pid: 0 },
    { id: 2, name: "软件专业", pid: 1 },
    { id: 3, name: "前端", pid: 2 },
    { id: 33, name: "html", pid: 3 },
    { id: 34, name: "css", pid: 3 },
    { id: 35, name: "div", pid: 34 },
    { id: 4, name: "后端", pid: 2 },
    { id: 41, name: "php", pid: 4 },
    { id: 42, name: "java", pid: 4 },
    { id: 5, name: "动漫专业", pid: 0 },
    { id: 51, name: "2d动漫", pid: 5 },
    { id: 511, name: "插画设计", pid: 51 },
    { id: 52, name: "3d动漫", pid: 5 }
  ];

  @Provide()
  sex = "Inject接受";

  mounted() {
    this.init();
    console.log(this.digui(5));
    console.log(this.deeploop(0));
    this.fun();
    window.addEventListener("mousemove", this.throttle(this.handle, 1000));
    window.addEventListener("click", this.debounce(this.handleD, 1000));
    setTimeout(() => {
      for (let i = 0; i < 20; i++) {
        this.list.push(i);
      }
    }, 1000);

    const arr = [
      { id: 1, name: "aaa" },
      { id: 2, name: "aaa1" },
      { id: 3, name: "aaa2" }
    ];
    const arr1 = _.shuffle(arr);
    console.log(arr1);
    console.log(_.sample(arr1));
    const objects = [{ n: 1 }, { n: 2 }, { n: 20 }, { m: 20 }];
    console.log(_.maxBy(objects, "n"));
  }

  init() {
    // const c = $("#myCanvas")[0];
    // const ctx = c.getContext("2d");
    // console.log(c); // 400
    // console.log(ctx); // CanvasRenderingContext2D对象
    // console.log(c.width); // 400
    // console.log(c.height); // 400
  }

  listPush() {
    this.list.push(4);
  }

  copyArr() {
    // jquery 身拷贝
    // const copyList = $.extend(true, [], this.list);
    // copyList.push("a");
    //  深拷贝与钱拷贝
    // 深拷贝
    const copyList = _.cloneDeep(this.list);
    copyList.push("a");
    console.log(this.list);
    console.log(copyList);
  }

  throttle(fn: any, wait: any) {
    // 函数节流
    let timer: any = null;
    return function() {
      if (!timer) {
        timer = setTimeout(() => {
          console.log("----");
          fn();
          timer = null;
        }, wait);
      }
    };
  }

  handle() {
    console.log("现在节流函数的时间是：" + Math.random());
  }

  debounce(func: any, delay: any) {
    // 函数防抖
    let timer: any = null;
    return function() {
      clearTimeout(timer);
      timer = setTimeout(function() {
        console.log("----");
        func.apply();
      }, delay);
    };
  }
  handleD() {
    console.log("现在防抖函数的时间是：" + Math.random());
  }

  digui(n: any) {
    // 递归
    if (n <= 1) {
      return 1;
    } else {
      return n + this.digui(n - 1);
    }
  }

  updated() {
    console.log("页面dome更新完毕哦");
    (this.$refs.test as any).scrollTop = (this.$refs.test as any).clientHeight;
  }

  findById(id: any) {
    const child: any[] = [];
    this.arr.forEach((value: any) => {
      if (value.pid === id) {
        child.push(value);
      }
    });
    return child;
  }

  deeploop(id: any) {
    const dataArr = this.findById(id);
    if (dataArr.length <= 0) {
      return null;
    } else {
      dataArr.forEach(value => {
        if (this.deeploop(value.id) != null) {
          value["children"] = this.deeploop(value.id);
        }
      });
    }

    return dataArr;
  }
  fun() {
    // 自己调用自己，称为递归调用
    this.fun();
    console.log("m2");
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
