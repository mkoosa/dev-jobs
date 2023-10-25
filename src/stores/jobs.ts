import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import getJobs from '@/api/getJobs';
import { paginationStore, userStore } from '@/main';

import type { ComputedRef } from 'vue';

import type { Job } from '@/api/types';

const useJobsStore = defineStore('jobStore', () => {
  const jobs = ref<Job[]>([]);
  const FETCH_JOBS = async () => {
    jobs.value = await getJobs();
  };

  const FILTERED_JOBS_BY_RULES = computed(() => {
    let arrayWithJobs: Job[] = JSON.parse(JSON.stringify(jobs.value));
    let arrayWithOptions: string[] = JSON.parse(JSON.stringify(userStore.userOptions));
    console.log(arrayWithJobs);

    //looking for jobs location + position
    if (arrayWithOptions[0] && arrayWithOptions[1]) {
      arrayWithOptions.forEach((option) => {
        if (option) {
          arrayWithJobs = arrayWithJobs.filter((job: Job) => {
            if (job.location !== undefined && job.position !== undefined)
              return (
                job.location.toLowerCase().includes(option.toLowerCase()) ||
                job.position.toLowerCase().includes(option.toLowerCase())
              );
          });
        }
        return arrayWithJobs;
      });
    }
    //looking for jobs location or position
    else if (arrayWithOptions[0] || arrayWithOptions[1]) {
      arrayWithOptions.forEach((option) => {
        if (option) {
          if (arrayWithOptions[1]) {
            arrayWithJobs = arrayWithJobs.filter((job: Job) => {
              if (job.location !== undefined)
                return job.location.toLowerCase().includes(option.toLowerCase());
            });
          }
          if (arrayWithOptions[0]) {
            arrayWithJobs = arrayWithJobs.filter((job: Job) => {
              if (job.position !== undefined)
                return job.position.toLowerCase().includes(option.toLowerCase());
            });
          }
          return arrayWithJobs;
        }
      });
    }
    ////looking for full time only
    if (userStore.FULL_TIME) {
      return arrayWithJobs.filter((job: Job) => job.contract === 'Full Time');
    } else {
      return arrayWithJobs;
    }
  });

  //amount of job offers on page
  const JOBS_ON_PAGE: ComputedRef<Job[]> = computed(() =>
    FILTERED_JOBS_BY_RULES.value.slice(
      (paginationStore.CURRENT_PAGE - 1) * 9,
      9 * paginationStore.CURRENT_PAGE
    )
  );

  //total amount of job offers
  const TOTAL_JOB_PAGES = computed(() => {
    return Math.ceil(FILTERED_JOBS_BY_RULES.value.length / 9);
  });
  return {
    jobs,
    FETCH_JOBS,
    TOTAL_JOB_PAGES,
    JOBS_ON_PAGE,
    FILTERED_JOBS_BY_RULES
  };
});

export default useJobsStore;
