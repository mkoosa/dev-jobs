<template>
  <div class="jobs">
    <job-listing v-for="job in jobs" :key="job.id" :job="job" />
  </div>
 
</template>

<script setup>
import JobListing from "@/components/JobResults/JobListing.vue"
import useJobsStore from "@/stores/jobs.js";
import { onMounted, ref } from 'vue'

const jobs = ref([])
const jobStore = useJobsStore()

onMounted(async () => {
  await jobStore.FETCH_JOBS();
  jobs.value = jobStore.ALL_JOBS

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