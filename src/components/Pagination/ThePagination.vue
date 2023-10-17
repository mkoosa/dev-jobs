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
