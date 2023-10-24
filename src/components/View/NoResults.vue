<template>
  <a-result status="warning" title="Upps, no results.">
    <template #extra>
      <a-button @click="backToMain()" class="some" key="console">Go Back</a-button>
    </template>
  </a-result>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { userStore, blurStore } from '@/main';
const router = useRouter();
const backToMain = () => {
  router.push({ name: 'Main' });
  console.log('blur out');
  if (blurStore.BLUR) blurStore.ACTIVATE_BLUR();
  //simulate searching for jobs with empty values => got full array of jobs
  userStore.updateUserOptions(['', '']);
};
</script>
