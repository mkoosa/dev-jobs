import { defineStore } from 'pinia';
import getJobs from '@/api/getJobs';
import { ref, computed } from 'vue';

const useJobsStore = defineStore('jobStore', () => {
  const jobs = ref('');

  const FETCH_JOBS = async () => {
    const receivedJobs = await getJobs();
    jobs.value = receivedJobs;
  };

  const ALL_JOBS = computed(() => jobs.value);
  return { jobs, FETCH_JOBS, ALL_JOBS };
});

export default useJobsStore;
