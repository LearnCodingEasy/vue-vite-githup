import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// استيراد ملف تكوين Vue Router
import router from "./router";

createApp(App).use(router).mount("#app");
