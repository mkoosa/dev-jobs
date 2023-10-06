<template>
  <div class="pagination pagination-mobile">
    <pagination-listing
     :currentPage="currentPage"
      :totalPages="totalPages" />
    <pagination-buttons
     :currentPage="currentPage" />
  </div>
  <div class="pagination pagination-desktop">
  <pagination-total paginationTotalClass="pagination__total"/>
    <pagination-buttons
     :currentPage="currentPage">
    <pagination-listing
     :currentPage="currentPage" 
     :totalPages="totalPages" />
    </pagination-buttons>
  </div>
</template>

<script setup>
/*eslint-disable*/

import PaginationButtons from '@/components/Pagination/PaginationButtons.vue';
import PaginationListing from '@/components/Pagination/PaginationListing.vue';
import PaginationTotal from '@/components/Pagination/PaginationTotal.vue';
import { computed } from 'vue';
import { paginationStore } from "@/main";
const totalPages = computed(() => paginationStore.TOTAL_PAGES);
const currentPage = computed(() => paginationStore.CURRENT_PAGE);


</script>

<style scoped>
.pagination {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 11rem;
  justify-content: space-around;
}

.pagination-desktop {
  display: none;
}

@media only screen and (min-width: 768px) {
  .pagination {
    position: fixed;
    max-width: 125rem;
    left: 50%;
    width: 90%;
    height: 5.5rem;
    top: 21rem;
    flex-direction: row;
    transform: translateX(-50%);
    background: var(--white);
    border-radius: .5rem;
  }
}

@media only screen and (min-width: 768px) {
  .pagination {
    justify-content: end;
    padding-right: 4rem;
    box-shadow: .1rem .1rem .4rem #e2e0e0;
  }
  
  .pagination-mobile {
    display: none;
  }
  
  .pagination-desktop {
    display: flex;
    justify-content: space-between;
  }
}

@media only screen and (min-width: 1024px) {
  .pagination-desktop {
    top: 22rem;
  }
}
</style>