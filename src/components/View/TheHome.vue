<template>
  <div class="wrapper" :class="addRemoveClass">
    <header-container />
    <router-view />
    <the-modal />
  </div>
</template>

<script setup>
import HeaderContainer from '@/components/Header/HeaderContainer.vue';
import TheModal from '@/components/View/TheModal.vue'
import { computed, onMounted } from "vue";
import useBlur from '@/stores/blur';
import { modalStore } from "@/main";
import Storage from '@/api/storage';

const blur = useBlur()
const addRemoveClass = computed(() => blur.BLUR ? 'blur' : '');
const prepareStorage =() => new Storage('modal', true) 



onMounted(() => {
  setTimeout(() => {
    const storage = prepareStorage();
    if (!storage.getStorage()) {
      storage.setStorage();
      modalStore.activateModal();
      storage.removeStorage()
    }

  }, 6000)
})

</script>
