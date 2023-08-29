import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useColorSchemaStore = defineStore('colorSchema', () => {
  const darkSchema = ref(false);

  //adding dynamically class to body tag
  const CHANGE_COLOR_SCHEMA = () => {
    darkSchema.value = !darkSchema.value;
    const body = document.querySelector('body');
    darkSchema.value ? body.classList.add('dark-theme') : body.classList.remove('dark-theme');
  };
  
  const DARK_SCHEMA_COLOR = computed(() => darkSchema.value);
  
  return { darkSchema, CHANGE_COLOR_SCHEMA, DARK_SCHEMA_COLOR };
});

export default useColorSchemaStore;
