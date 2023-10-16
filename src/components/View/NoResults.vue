<template>
  <a-result status="warning" title="Upps, no results.">
    <template #extra>
      <a-button @click="backToMain()" class="some" key="console">Go Back</a-button>
    </template>
  </a-result>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { userStore } from "@/main";
const router = useRouter();
const backToMain = () => {
  router.push({ name: 'Main' });
  
  //simulate searching for jobs with empty values => got full array of jobs
  userStore.updateUserOptions(['', '']);
}

</script>

<style>
.dark-theme .ant-result-title{
  color: var(--white) !important;
}
</style>