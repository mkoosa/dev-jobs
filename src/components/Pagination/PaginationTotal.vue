<template>
  <div>
    <p :class="paginationTotalClass">Score<span> {{ totalJobsScore }}</span></p>
  </div>
</template>

<script setup>
defineProps({
  paginationTotalClass: {
    type: String,
    required: true
  }
})

import { computed } from "vue";
import {jobStore} from "@/main"
const totalJobsScore = computed(()=> jobStore.FILTERED_JOBS_BY_RULES.length) 
</script>

<style scoped>
.pagination__total{
    display: none;
  }
  
@media only screen and (min-width: 768px) {
  .pagination__total{
    display: inline-block;
    color: var(--dark-grey);
    padding-left: 4rem;
  }
  .pagination__total >span{
    font-weight: 600;
    margin-left: .5rem;
  }
}
</style>

