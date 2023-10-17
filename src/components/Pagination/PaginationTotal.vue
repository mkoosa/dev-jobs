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


