import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import { jobStore } from '@/main';

const usePaginationStore = defineStore('paginationStore', () => {
  const pagination = ref('');
  const route = useRoute();

  // const TOTAL_PAGES = computed(() => jobStore.jobs ? Math.ceil(jobStore.FILTERED_JOBS_BY_RULES.length / 9) : 0
  const TOTAL_PAGES = computed(() => (jobStore.jobs ? jobStore.TOTAL_JOB_PAGES : 0));
  const CURRENT_PAGE = computed(() => {
    if (Number.parseInt(route.query.page as string) > TOTAL_PAGES.value) {
      return TOTAL_PAGES.value;
    }
    return Number.parseInt(route.query.page as string) || 1;
  });

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

  return { pagination, TOTAL_PAGES, CURRENT_PAGE, PREVIOUS_PAGE, NEXT_PAGE };
});

export default usePaginationStore;
