<template>
  <div class="Component-Name">
    <div>
      <input type="text" name="name" id="name" v-model="name" />
      <div>{{ name }}</div>
    </div>
  </div>
</template>

<script>
/** Imports For Setup
 * Ref
 *
 *
 */
import { ref } from "vue";

export default {
  name: "MyFile",
  setup() {
    let name = ref("");
    return { name };
  }
};
</script>

<style lang="scss" scoped></style>
