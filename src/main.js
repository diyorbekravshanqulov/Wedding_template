import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import i18n from "./plugins/i18n";
import router from "./router";
import Vue3Toastify from "vue3-toastify";
import VCalendar from "v-calendar";
import "v-calendar/style.css";

const app = createApp(App);

const pinia = createPinia();

app.use(Vue3Toastify, {
  autoClose: 3000,
});
app.use(VCalendar, {});
app.use(i18n);
app.use(pinia);
app.use(router);
app.mount("#app");
