import { defineStore } from 'pinia';
import getJobs from '@/api/getJobs';
import { ref, computed } from 'vue';

const useJobsStore = defineStore('jobStore', () => {
  const jobs = ref([]);

  const FETCH_JOBS = async () => {
    jobs.value = await getJobs();
  };

  const ALL_JOBS = computed(() => jobs.value.record);
  return { jobs, FETCH_JOBS, ALL_JOBS };
});

export default useJobsStore;
