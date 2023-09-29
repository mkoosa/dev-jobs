<template>
  <div class="jobs">
    <job-listing v-for="job in jobs" :key="job.id" :job="job" />
  </div>
</template>

<script setup>
import JobListing from "@/components/JobResults/JobListing.vue"
import { jobStore } from "@/main";
import { computed, onMounted } from 'vue'

const jobs = computed(() => {
  return jobStore.jobs.record ? jobStore.ALL_JOBS : false
})

onMounted(async () => {
  await jobStore.FETCH_JOBS();
})


</script>
<style>
@media only screen and (min-width:768px) {
  .jobs {
    margin-top: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>