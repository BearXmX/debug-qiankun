<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string; otherMsg?: string }>();

const count = ref(0);
</script>

<template>
  <div style="margin-top: 20px">
    <h1>{{ msg }}</h1>
    <button style="margin-top: 20px" type="button" @click="count++">
      count is {{ count }}
    </button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
