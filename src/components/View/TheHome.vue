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

const blur = useBlur()
const addRemoveClass = computed(() => blur.BLUR ? 'blur' : '');

onMounted(() => {
  setTimeout(() => {
    console.log('object');
    modalStore.activateModal()
  }, 6000)
})

</script>

<style>
.wrapper.blur::after {
  position: fixed;
  content: '';
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: .3;
  z-index: 4;
  background-color: var(--light-violet);
  filter: blur(4rem);
  max-width: 145rem;
}
</style>