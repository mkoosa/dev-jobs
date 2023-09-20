<template>
  <div class="main">
    <job-listings />
    <the-pagination />
  </div>
</template>


<script setup>
import JobListings from '@/components/JobResults/JobListings.vue';
import ThePagination from '@/components/Pagination/ThePagination.vue';

</script>

<style scoped>
.main {
  padding: 10rem 2rem 3rem 2rem;
  width: 100%;
  position: relative;
}
@media only screen and (min-width:768px){
  .main{
    padding-top: 9rem;
  }
}

</style>