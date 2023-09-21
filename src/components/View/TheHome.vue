<template>
  <div class="wrapper" :class="addRemoveClass">
    <header-container />
    <router-view/>
  </div>
</template>

<script setup>
import HeaderContainer from '@/components/Header/HeaderContainer.vue';
import { computed, ref } from "vue"

const isClassActive = ref(false)
const addRemoveClass = computed(() => isClassActive.value ? 'blur' : '')
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