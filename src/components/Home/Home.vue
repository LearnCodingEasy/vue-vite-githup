<template>
  <div class="Component-Name">
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="../../assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
    <h2>Hello</h2>
    <h2>Hello</h2>
    <h2>Hello</h2>
    <MyFile />
  </div>
</template>

<!-- <script>
import HelloWorld from "../HelloWorld.vue";
import MyFile from "../MyFile.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    MyFile
  }
};
</script> -->
<script setup>
import HelloWorld from "../HelloWorld.vue";
import MyFile from "../MyFile.vue";
</script>

<style lang="scss" scoped></style>
