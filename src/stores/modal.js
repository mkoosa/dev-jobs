import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { jobStore } from '@/main';
const useModalStore = defineStore('modalStore', () => {
  const modal = ref(false);

  const activateModal = () => (jobStore.jobs.length === 30 ? (modal.value = !modal.value) : false);

  const ACTIVE_MODAL = computed(() => modal.value);

  return { ACTIVE_MODAL, activateModal };
});

export default useModalStore;
