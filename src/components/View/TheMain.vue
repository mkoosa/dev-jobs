<template>
  <main class="main">
    <job-search-form @item-clicked="isActiveClass" />
    <the-spinner v-if="isLoaded" />
    <job-listings />
    <the-pagination />
  </main>
</template>

<script lang="ts" setup>
import JobListings from '@/components/JobResults/JobListings.vue';
import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue';
import ThePagination from '@/components/Pagination/ThePagination.vue';
import TheSpinner from '@/components/Shared/TheSpinner.vue';

import { ref, computed } from 'vue';
import { jobStore } from '@/main';

const isClassActive = ref(false);

const isActiveClass = (value: boolean) => {
  isClassActive.value = value;
};

const isLoaded = computed(() => (!jobStore.jobs.length ? true : false));
</script>
