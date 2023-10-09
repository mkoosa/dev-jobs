import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useUserStore = defineStore('userStore', () => {
  const fullTime = ref(false);

  const FULL_TIME = computed(() => fullTime.value)   

  return { fullTime, FULL_TIME  };
});

export default useUserStore;
