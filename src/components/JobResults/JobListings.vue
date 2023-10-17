<template>
  <div class="jobs">
    <job-listing role="link" v-for="job in jobs" :key="job.id" :job="job" />
    <div v-if="isSearchingActive" class="cancel-btn__wrapper">
      <ActionBtn @click="cancelJobSearching()" class="cancel-btn" text="cancel" />
    </div>
  </div>
</template>

<script setup>
import JobListing from "@/components/JobResults/JobListing.vue";
import ActionBtn from "@/components/Shared/ActionBtn.vue"
import { jobStore, userStore } from "@/main";
import { useRouter } from 'vue-router';
import { computed, onMounted } from 'vue'

const router = useRouter();

const jobs = computed(() => jobStore.JOBS_ON_PAGE)
const isSearchingActive = computed(() => {
  return jobStore.jobs.length > jobStore.FILTERED_JOBS_BY_RULES.length && !userStore.fullTime ? true : false
})

const cancelJobSearching = () => {
  if (!userStore.fullTime) {
    //simulate searching for jobs with empty values => got full array of jobs
    router.push({ name: 'Main' });
    userStore.updateUserOptions(['', ''])
  }
};

onMounted(async () => {
  await jobStore.FETCH_JOBS();
})
</script>

