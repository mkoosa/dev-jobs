<template>
  <a-result status="warning" title="Upps, no results.">
    <template #extra>
      <a-button @click="backToMain()" class="some" key="console">Go Back</a-button>
    </template>
  </a-result>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { userStore, blurStore } from "@/main";
const router = useRouter();
const backToMain = () => {
  
  router.push({ name: 'Main' });
  blurStore.ACTIVATE_BLUR()
  
  //simulate searching for jobs with empty values => got full array of jobs
  userStore.updateUserOptions(['', '']);
}

</script>

<style>
.ant-result{
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  z-index: 200;
}

.ant-btn-default{
  background:var(--violet);
  color: var(--white);
}

.dark-theme .ant-result-title{
  color: var(--white) !important;
}
</style>