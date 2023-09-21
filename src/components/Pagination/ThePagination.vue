<template>
  <div class="pagination pagination-mobile">
    <pagination-listing :currentPage="currentPage" />
    <pagination-buttons :currentPage="currentPage" />
  </div>
  <div class="pagination pagination-desktop">
    <pagination-buttons :currentPage="currentPage">
      <pagination-listing :currentPage="currentPage" />
    </pagination-buttons>
  </div>
</template>

<script setup>
import PaginationButtons from '@/components/Pagination/PaginationButtons.vue';
import PaginationListing from '@/components/Pagination/PaginationListing.vue';
import { ref } from 'vue';

const currentPage = ref(2)

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
    /* top: 21rem; */
  }
}

@media only screen and (min-width: 1024px){
  .pagination-desktop {
    top: 22rem;
  }
}
</style>