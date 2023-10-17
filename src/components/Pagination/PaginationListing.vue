<template>
  <div class="pagination__listing" :class="setMargins()" currentPage="currentPage">
    <span class="mobile-view">Page</span><span class="current-page">{{ currentPage }}</span><span
      class="from">from</span><span class="total">{{ totalPages }}</span>
  </div>
</template>

<script setup>
import { paginationStore } from "@/main";
import { computed } from "vue";

const previousPage = computed(() => paginationStore.PREVIOUS_PAGE);
const nextPage = computed(() => paginationStore.NEXT_PAGE);

defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

const setMargins = () => {
  if (!previousPage.value) {
    return "margin-left";
  } else if (!nextPage.value) {
    return "margin-right";
  }
};
</script>

<style scoped>
@import '@/assets/css/paginationListing.css';
</style>
