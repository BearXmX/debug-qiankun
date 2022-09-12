<script setup lang="ts">
import { onBeforeMount, onMounted } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { ElButton } from "element-plus";
import { reactive, ref } from "vue";
import type { CSSProperties } from "vue";
import { uniq } from "lodash";

import logo from "../public/vite.svg";

console.log(uniq([1, 2, 1, 2, 3, 4, 5]), "uniq");

const count = ref<number>(0);

const css: CSSProperties = {
  display: "block",
  fontSize: 14,
  marginBottom: 20,
};

const currentUser = reactive<ICurrentUser>({
  userName: "XmX",
  userId: 999,
});

/** @description count++ */
const addCount = () => {
  count.value++;
};

onBeforeMount(() => {
  console.log("onBeforeMount");
});

onMounted(() => {
  console.log("onMounted");
});
</script>

<template>
  <div>
    <img :src="logo" class="logo" alt="Vite logo" />
    <div :style="1 ? { marginBottom: '20px' } : css">
      <ElButton type="default" @click="addCount">ElButton</ElButton>
    </div>
    <div :style="css">计数: {{ count }}</div>
    <!-- <div :style="css">
      userId: {{ currentUser.userId }} user: {{ currentUser.userName }}
    </div> -->
  </div>
  <HelloWorld msg="Vite + Vue" other-msg="first-vite" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

function setup() {
  throw new Error("Function not implemented.");
}
