import { defineStore } from 'pinia';
import getJobs from '@/api/getJobs';
import { ref, computed } from 'vue';
import { paginationStore, userStore } from '@/main';

const useJobsStore = defineStore('jobStore', () => {
  const jobs = ref([]);
  const FETCH_JOBS = async () => {
    jobs.value = await getJobs();
  };

  const ALL_JOBS = computed(() => {
    let score = jobs.value.slice(
      (paginationStore.CURRENT_PAGE - 1) * 9,
      9 * paginationStore.CURRENT_PAGE
    );
    if (userStore.FULL_TIME) {
      return score.filter((item) => item.contract === 'Full Time');
    } else {
      return score;
    }
  });

  const TOTAL_JOB_PAGES = computed(() => jobs.value.length / 9);
  return { jobs, FETCH_JOBS, ALL_JOBS, TOTAL_JOB_PAGES };
});

export default useJobsStore;
