<template>
  <div>
    <h2 class="hbb-page-title">{{age}}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import bus from "@/utils/event.ts";
import Login from "@/views/login.vue";
@Component({})
export default class extends Vue {
  age = "21";

  mounted() {

    bus.$on("dataA", (name: any) => {
      this.age = name;
      console.log(name);
    });
  }
}
</script>

<style lang="scss" scoped></style>
