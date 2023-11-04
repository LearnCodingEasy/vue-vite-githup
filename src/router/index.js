// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home/Home.vue";
import About from "../components/About/About.vue";
import ExplainVite from "../components/ExplainVite.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/ExplainVite",
    name: "ExplainVite",
    component: ExplainVite
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
