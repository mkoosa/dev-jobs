<template>
  <RouterLink :to="pageLink" class="job">
    <div class="logo-wrapper" :style="{ backgroundColor: job.logoBackground }">
      <img class="logo" :src="job.logo" alt="logo company" />
    </div>
    <p class="job__type">
      <span>{{ job.postedAt }}</span><span class="dot">.</span><span>{{ job.contract }}</span>
    </p>
    <h2 class="job__position">{{ job.position }}</h2>
    <p class="job__company">{{ job.company }}</p>
    <p class="job__location">{{ job.location }}</p>
  </RouterLink>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
});

const pageLink = computed(() => `/jobs/results/${props.job.id}`);
</script>
<style scoped>
@import '@/assets/css/jobListing.css';
</style>
