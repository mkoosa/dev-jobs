<template>
  <div class="pagination__listing" :class="setMargins()" currentPage="currentPage">
    <span class="mobile-view">Page</span
    ><span class="current-page">{{ currentPage }}</span
    ><span class="from">from</span><span class="total">{{ totalPages }}</span>
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
.pagination__listing {
  color: var(--violet);
  font-size: 1.6rem;
}

.current-page {
  margin: 0.3rem;
  font-weight: 700;
}

span:last-of-type {
  margin-left: 0.3rem;
}

@media only screen and (min-width: 768px) {
  .mobile-view {
    display: none;
  }

  span:last-of-type,
  .current-page {
    margin: 0;
    font-weight: initial;
  }

  .pagination__listing {
    margin: 0 1rem 0 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .current-page {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid var(--grey);
    width: 2.5rem;
    height: 3.5rem;
    border-radius: 0.4rem;
    margin-right: 0.6rem;
    background: var(--light-grey);
    margin-left: 0.5rem;
  }

  .from {
    font-size: 1.5rem;
    margin-right: 0.3rem;
  }

  .margin-right .total {
    margin-right: 3rem;
  }

  .margin-left .current-page {
    margin-left: 3rem;
  }
}
</style>
