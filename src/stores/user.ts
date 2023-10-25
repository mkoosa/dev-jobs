import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const useUserStore = defineStore('userStore', () => {
  const fullTime = ref(false);
  const userOptions = ref('');

  const updateUserOptions = (options: string) => (userOptions.value = options);

  const FULL_TIME = computed(() => fullTime.value);
  const USER_OPTIONS = computed(() => userOptions.value);

  return { fullTime, FULL_TIME, updateUserOptions, userOptions, USER_OPTIONS };
});

export default useUserStore;
