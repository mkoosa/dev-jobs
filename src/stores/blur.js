import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useBlur = defineStore('blur', () => {
  const blur = ref(false);
  const ACTIVATE_BLUR = () => {
    blur.value = !blur.value;
  };

  const BLUR = computed(() => blur.value);

  return { ACTIVATE_BLUR, BLUR };
});

export default useBlur;
