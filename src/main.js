import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from './router'
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import naive from 'naive-ui'
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import '@/style/gloub.scss'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.use(naive)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
