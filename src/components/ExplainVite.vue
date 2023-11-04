<!-- 
  - Sass
  -- npm install -D sass
 -->
<template>
  <div class="ExplainVite">
    <div class="className">
      <div class="card">
        <h2>Variables المتغيرات</h2>
        <h2>Ref</h2>
        <h2>{{ a }}</h2>
      </div>
      <div class="card">
        <h2>Normal Function</h2>
        <h2>{{ b }}</h2>
        <button @click="handleClick">Click</button>
      </div>
      <!-- Start Upload Value Inside With Object -->
      <div class="card">
        <h4 class="lead">Upload Value Inside With Object</h4>
        <h4>{{ One.name }} - {{ One.age }}</h4>
        <button @click="updateOne">Update One</button>
      </div>
      <!-- End Upload Value Inside With Object -->
      <!-- Start V - Model -->
      <div class="card">
        <h4 class="lead">V - Model</h4>
        <input type="text" v-model="vModalSetup" />
        <p>search term Refs - {{ vModalSetup }}</p>
      </div>
      <!-- End V - Model -->
      <!-- Start V - Bind -->
      <div class="card">
        <h4 class="lead">V - Bind</h4>
        <input type="text" v-model="vBindSetup" />
        <button :disabled="vBindSetup.length == 0">Disabled</button>
      </div>
      <!-- End V - Bind -->
      <!-- Start Computed For Return Value Inside Object -->
      <div class="card">
        <h4 class="lead">Computed For Return Value Inside Object</h4>
        <input type="text" v-model="searchRefs" />
        <p>search term Refs - {{ searchRefs }}</p>
        <router-link
          :to="{ path: name }"
          v-for="name in matchingNamesRefs"
          :key="name"
          target="_blank"
          >{{ name }}</router-link
        >
      </div>
      <!-- End Computed For Return Value Inside Object -->
      <!-- Start On Mounted -->
      <div class="card">
        <h4 class="lead">On Mounted</h4>
        <input
          ref="searchOnMountedEl"
          type="text"
          v-model="searchOnMountedName"
        />
        <p>search term Refs - {{ el }}</p>
        <p>search term On Mounted : {{ searchOnMounted }}</p>
      </div>
      <!-- End On Mounted -->
      <!-- Start Watch -->
      <div class="card">
        <h4 class="lead">Watch</h4>
        <input type="text" v-model="searchWatchEl" />
        <p>search term Watch El - {{ searchWatchEl }}</p>
        <p>search term Watch Name : {{ searchWatchName }}</p>
      </div>
      <!-- End Watch -->
    </div>
  </div>
</template>
<!-- 1 -->
<!-- <script>
/** Import For Setup
 *
 * Ref
 * Computed
 * OnMounted
 * Watch
 *
 *
 *
 */
import { ref } from "vue";

export default {
  // Page Name
  name: "ExplainVite",
  setup() {
    let a = ref("This Is Ref");
    return { a };
  }
};
</script> -->

<!-- 
  components لا يوجد فى الستاب 
  
-->

<!-- 2 -->
<script setup>
import { computed, onMounted, ref, watch } from "vue";

// Page Name
name: "ExplainVite";

// Variables المتغيرات
// Ref
// (Dom) الامحددات اللى فى الجافا اسكربت
let a = ref("This Is Ref");
let b = ref("This Is Normal Function");

// Normal Function
let handleClick = () => {
  console.log("Handle Click");
  b.value = "Ching Value";
};

// Function Upload Value Inside With Object
const One = ref({ name: "Learn", age: 30 });
const updateOne = () => {
  One.value.age = 40;
};

// V - Model
const vModalSetup = ref("");
// V - Bind
const vBindSetup = ref("");
// Function Computed For Return Value Inside Object
const searchRefs = ref("");
const namesRef = ref(["mario", "yoshi mario", "luigi ", "toad luigi"]);
const matchingNamesRefs = computed(() => {
  return namesRef.value.filter((name) => name.includes(searchRefs.value));
});
// On Mounted
const searchOnMountedEl = ref("");
const searchOnMountedName = ref("");
onMounted(() => {
  searchOnMountedEl.value.focus();
  console.log("Component Mounted");
  searchOnMountedEl.value.style.setProperty(`background`, `chartreuse`);
});
// Watch
const searchWatchEl = ref("");
const searchWatchName = ref("");
watch(() => {
  searchWatchEl.value.length >= 3
    ? (searchWatchName.value = searchWatchEl.value)
    : (searchWatchName.value = "");
});
components: {
}
</script>

<style lang="scss" scoped>
.ExplainVite {
  position: relative;
  display: block;
  width: 100%;
  .className {
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem 1rem;
    .card {
      border: 0.5rem solid #f00;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      flex-direction: column;
      background: #f56666;
      padding: 1rem 0.5rem;
      border-radius: 10px;
      h2 {
        padding: 4px 0;
        margin: 0;
      }
      button {
        margin: 10px auto;
      }
    }
  }
}
</style>
