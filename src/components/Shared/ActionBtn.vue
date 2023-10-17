<template>
  <button :class="buttonClass">{{ text }}<slot></slot></button>
</template>
<script setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
});

const { type } = toRefs(props);
const buttonClass = computed(() => {
  return {
    [type.value]: true, // primary:type.value === 'primary'
  };
});
</script>

<style scoped>
@import '@/assets/css/actionBtn.css';
</style>
