/*eslint-disable*/

import { defineStore } from 'pinia';
import { computed } from 'vue';
import { jobStore } from '@/main';
import { useRoute } from 'vue-router';

const usePaginationStore = defineStore('paginationStore', () => {
  const route = useRoute();
  const TOTAL_PAGES = computed(() =>
    jobStore.jobs.record ? Math.ceil(jobStore.jobs.record.length / 12) : 0
  );

  const CURRENT_PAGE = computed(() => +route.query.page || 1);
  const PREVIOUS_PAGE = computed(() => {
    const previousPage = CURRENT_PAGE.value - 1;
    const firstPage = 1; //1
    return previousPage >= firstPage ? previousPage : 0;
  });
  
  const NEXT_PAGE = computed(() => {
    const nextPage = CURRENT_PAGE.value + 1;
    const maxPage = TOTAL_PAGES.value; // 3
    return nextPage <= maxPage ? nextPage : 0;
  });

  return { TOTAL_PAGES, CURRENT_PAGE, PREVIOUS_PAGE, NEXT_PAGE };
});

export default usePaginationStore;
