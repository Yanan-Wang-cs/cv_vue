import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { getStaticFile } from "@/api/api";
import "@/assets/style/index.scss";
import "@/assets/style/theme/orange.scss";

async function start() {
  const { data: config } = await getStaticFile("/config/config.json");
  const { data: en } = await getStaticFile("/lang/en.json");
  const { data: zh } = await getStaticFile("/lang/zh.json");
  const messages = {
    en,
    zh,
  };
  console.log(config, en, zh, messages);
  const i18n = createI18n({
    locale: config.defaultLang,
    messages,
    legacy: false,
  });
  const vm = createApp(App).use(store).use(router).use(i18n);
  vm.provide("$myconfig", config);
  vm.mount("#app");
}

start();
