<template>
  <div class="hello text-left">
    <h1>{{ msg }}</h1>
    <el-button type="primary">Primary</el-button>
    <p>
      {{ $t("title") }}
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup() {
    console.log("123");
  },
});
</script>

<style scoped lang="scss"></style>
