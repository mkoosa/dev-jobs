<template>
  <a-result status="warning" title="Upps, no results. Please try once again">
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

<style scoped>
@import 'ant-design-vue/dist/reset.css';

.some {
  background: var(--violet);
  outline: none;
  border: none;
  color: var(--white);
}
</style>