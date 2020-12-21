<template>
  <div>
    <h2 class="hbb-page-title">点我发送数据</h2>
    <span>我用到了副组建的数据{{ (mode && mode) || "中间组建" }}</span>
    <span>Inject方式{{ sex }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from "vue-property-decorator";
import bus from "@/utils/event.ts";
@Component({})
export default class extends Vue {
  @Prop({ type: String, default: "", required: true })
  mode!: string;
  @Inject("sex")
  sex!: string;
  name = "hanbao";
  updated() {
    bus.$emit("dataA", this.name);
  }
}
</script>

<style lang="scss" scoped></style>
