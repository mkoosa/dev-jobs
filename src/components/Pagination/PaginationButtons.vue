<template>
  <div class="pagination__buttons mobile-view">
    <action-btn
      v-if="previousPage"
      type="pagination__button"
      currentPage="currentPage"
      role="button"
    >
      <router-link :to="{ name: 'Main', query: { page: previousPage } }">
        <font-awesome-icon class="arrow arrow-left" :icon="['fas', 'arrow-left']" />
        {{ previous }}
      </router-link>
    </action-btn>
    <slot></slot>
    <action-btn v-if="nextPage" type="pagination__button" currentPage="currentPage" role="button">
      <router-link :to="{ name: 'Main', query: { page: nextPage } }">
        {{ next }}
        <font-awesome-icon class="arrow arrow-right" :icon="['fas', 'arrow-right']" />
      </router-link>
    </action-btn>
  </div>
  <div class="pagination__buttons desktop-view" role="pagination-buttons">
    <router-link :to="{ name: 'Main', query: { page: previousPage } }" role="button">
      <action-btn v-if="previousPage" type="pagination__button" currentPage="currentPage">
        <font-awesome-icon
          class="arrow arrow-left no-outline"
          :icon="['fas', 'arrow-left']"
          tabindex="1"
        />
      </action-btn>
    </router-link>
    <slot></slot>
    <router-link :to="{ name: 'Main', query: { page: nextPage } }">
      <action-btn v-if="nextPage" type="pagination__button" currentPage="currentPage" role="button">
        <font-awesome-icon
          class="arrow arrow-right no-outline"
          :icon="['fas', 'arrow-right']"
          tabindex="1"
        />
      </action-btn>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import ActionBtn from '@/components/Shared/ActionBtn.vue';
import { paginationStore } from '@/main';

const previousPage = computed(() => {
  return paginationStore.PREVIOUS_PAGE;
});
const nextPage = computed(() => {
  return paginationStore.NEXT_PAGE;
});

defineProps({
  currentPage: {
    type: Number,
    required: true
  }
});

const previous = ref('Previous');
const next = ref('Next');
</script>

<style scoped>
@import '@/assets/css/paginationButtons.css';
</style>
