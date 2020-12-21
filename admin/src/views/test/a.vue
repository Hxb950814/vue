<template>
  <div>
    <h2 class="hbb-page-title">点我发送数据</h2>
    <span>我没用到了副组建的数据{{mode && mode || '中间组建'}}</span>
    <C v-bind="$attrs"></C>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import bus from "@/utils/event.ts";
import C from "./c.vue";
@Component({
  components: {
    C
  }
})
export default class extends Vue {
  name = "hanbao";
  mode  = "hanbao";
  updated() {
    bus.$emit("dataA", this.name);
  }
}
</script>

<style lang="scss" scoped></style>
