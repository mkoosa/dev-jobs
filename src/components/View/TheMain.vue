<template>
  <div class="main">
    <job-search-form @item-clicked="isActiveClass" />
    <the-spinner v-if="isLoaded" />
    <job-listings />
    <the-pagination />
  </div>
</template>


<script setup>
import JobListings from '@/components/JobResults/JobListings.vue';
import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue';
import ThePagination from '@/components/Pagination/ThePagination.vue';
import TheSpinner from '@/components/Shared/TheSpinner.vue';

import { ref, computed } from "vue";
import { jobStore } from "@/main";

const isClassActive = ref(false);

const isActiveClass = (value) => {
  isClassActive.value = value;
}

const isLoaded = computed(() => (!jobStore.jobs.record) ? true : false)

</script>

<style>
.main {
  padding: 10rem 2rem 3rem 2rem;
  width: 100%;
  position: relative;
}

@media only screen and (min-width:768px) {
  .main {
    padding-top: 9rem;
  }
}
</style>