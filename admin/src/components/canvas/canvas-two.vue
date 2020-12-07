<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class extends Vue {
  mounted(): void {
    this.init();
  }

  init() {
    console.log(1);
  }
}
</script>

<style lang="scss" scoped></style>
