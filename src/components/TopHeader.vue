<template>
  <el-affix :offset="0">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">LOGO</el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
    <button @click="setLanguage('en')">En</button>
    <p @click="setLanguage('zh')">Zh</p>
  </el-affix>
</template>

<script lang="ts">
// import { computed, ref } from "vue";
import { defineComponent, inject, ref } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "TopHeader",
  setup() {
    console.log(inject("$myconfig"));
    const { locale } = useI18n();
    // const { t } = useI18n();
    // const changeLang = (lang: string) => (local = lang);
    function setLanguage(lang: string) {
      locale.value = lang;
    }
    const activeIndex = ref("1");
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    return { setLanguage, handleSelect, activeIndex };
  },
});
</script>

<style scoped lang="scss"></style>
