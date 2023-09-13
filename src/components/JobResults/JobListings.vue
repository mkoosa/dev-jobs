<template>
  <div class="jobs">
    <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" ></job-listing>
  </div>
</template>

<script setup>
import JobListing from "@/components/JobResults/JobListing.vue"
import useJobsStore from "@/stores/jobs.js";
import { onMounted, computed } from 'vue'

const jobStore = useJobsStore()
const displayedJobs = computed(() => jobStore.ALL_JOBS)
onMounted(() => jobStore.FETCH_JOBS())


</script>
<style>
.jobs {
  position: relative;
}
</style>