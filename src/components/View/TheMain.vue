<template>
  <div class="wrapper" :class="addRemoveClass">
    <header-container />
    <div class="main">
      <job-search-form @item-clicked="isActiveClass" />
      <job-listings />
      <the-pagination />
    </div>
  </div>
</template>

<script setup>
import HeaderContainer from '@/components/Header/HeaderContainer.vue';
import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue';
import JobListings from '@/components/JobResults/JobListings.vue';
import ThePagination from '@/components/Pagination/ThePagination.vue';
import { computed, ref } from "vue"

const isClassActive = ref(false)
const addRemoveClass = computed(() => isClassActive.value ? 'blur' : '')

const isActiveClass = (value) => {
  isClassActive.value = value;
}
</script>

<style>
.main {
  padding: 10rem 2rem 3rem 2rem;
  width: 100%;
  position: relative;
}

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

@media only screen and (min-width:768px){
  .main{
    padding-top: 9rem;
  }
}
</style>