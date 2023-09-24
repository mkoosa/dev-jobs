import { defineStore } from 'pinia';
import getJobs from '@/api/getJobs';
import { ref, computed } from 'vue';
import { paginationStore } from '@/main';

const useJobsStore = defineStore('jobStore', () => {
  const jobs = ref([]);
  const FETCH_JOBS = async () => {
    jobs.value = await getJobs();
  };

  const ALL_JOBS = computed( () => jobs.value.record.slice((paginationStore.CURRENT_PAGE-1)*12, 12*paginationStore.CURRENT_PAGE));
  const TOTAL_JOB_PAGES = computed(() => jobs.value.record.length / 12);

  return { jobs, FETCH_JOBS, ALL_JOBS, TOTAL_JOB_PAGES };
});

export default useJobsStore;
