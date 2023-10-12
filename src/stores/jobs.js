import { defineStore } from 'pinia';
import getJobs from '@/api/getJobs';
import { ref, computed } from 'vue';
import { paginationStore, userStore } from '@/main';

const useJobsStore = defineStore('jobStore', () => {
  const jobs = ref([]);
  const FETCH_JOBS = async () => {
    jobs.value = await getJobs();
  };

  const FILTERED_JOBS_BY_RULES = computed(() => {
    let arrayWithJobs = JSON.parse(JSON.stringify(jobs.value));
    let arrayWithOptions = JSON.parse(JSON.stringify(userStore.userOptions));

    //looking for jobs location + position
    if (arrayWithOptions[0] && arrayWithOptions[1]) {
      arrayWithOptions.forEach((option) => {
        if (option) {
          arrayWithJobs = arrayWithJobs.filter(
            (job) => job.location.toLowerCase().includes(option.toLowerCase()) || job.position.toLowerCase().includes(option.toLowerCase())
          );
          return arrayWithJobs;
        }
      });
    }
    //looking for jobs location or position
    else if (arrayWithOptions[0] || arrayWithOptions[1]) {
      arrayWithOptions.forEach((option) => {
        if (option) {
          if (arrayWithOptions[1]) {
            arrayWithJobs = arrayWithJobs.filter((job) => job.location.toLowerCase().includes(option.toLowerCase()));
          }
          if (arrayWithOptions[0]) {
            arrayWithJobs = arrayWithJobs.filter((job) => job.position.toLowerCase().includes(option.toLowerCase()));
          }
          return arrayWithJobs;
        }
      });
    }
    ////looking for full time only
    if (userStore.FULL_TIME) {
      return arrayWithJobs.filter((job) => job.contract === 'Full Time');
    } else {
      return arrayWithJobs;
    }
  });

  //amount of jobs offer on page
  const JOBS_ON_PAGE = computed(() =>
    FILTERED_JOBS_BY_RULES.value.slice(
      (paginationStore.CURRENT_PAGE - 1) * 9,
      9 * paginationStore.CURRENT_PAGE
    )
  );

  const JOBS_COUNTER = computed(() => {
    let score = jobs.value;
    if (userStore.FULL_TIME) {
      return score.filter((item) => item.contract === 'Full Time');
    } else {
      return score;
    }
  });

  //total amount of job offers
  const TOTAL_JOB_PAGES = computed(() => {
    return FILTERED_JOBS_BY_RULES.value.length / 9;
  });
  return {
    jobs,
    FETCH_JOBS,
    TOTAL_JOB_PAGES,
    JOBS_COUNTER,
    JOBS_ON_PAGE,
    FILTERED_JOBS_BY_RULES
  };
});

export default useJobsStore;
