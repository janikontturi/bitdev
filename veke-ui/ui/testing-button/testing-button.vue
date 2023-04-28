<script setup lang="ts">
import { ref } from "vue";

defineProps({
  title: {
    type: String,
    default: "",
  },
});

const count = ref(0);
</script>

<template>
  <button @click="count++" class="p-5 bg-red-200">{{ title }}: {{ count }}</button>
</template>
