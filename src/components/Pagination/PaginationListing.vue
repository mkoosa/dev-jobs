<template>
  <div class="pagination__listing" currentPage="currentPage">
    <p><span class="mobile-view">Page</span><span class="bold-text">{{ currentPage }}</span><span
        class="from">from</span><span class="total">3</span></p>
  </div>
</template>

<script setup>
defineProps({
  currentPage: {
    type: Number,
    required: true
  }
})
</script>

<style scoped>
.pagination__listing {
  color: var(--violet);
}

.bold-text {
  margin: .3rem;
  font-weight: 700;
}

span:last-of-type {
  margin-left: .3rem;
}

@media only screen and (min-width:768px) {
  .mobile-view {
    display: none;
  }

  span:last-of-type,
  .bold-text {
    margin: 0;
    font-weight: initial;
  }

  .pagination__listing {
    margin: 0 1rem 0 .5rem;
  }

  .bold-text {
    border: .1rem solid var(--grey);
    padding: 1.1rem 1.3rem;
    border-radius: 1rem;
    margin-right: .6rem;
    background: var(--light-grey);
    margin-left: .5rem;
  }

  .from {
    font-size: 1.5rem;
    margin-right: .3rem;
  }

}
</style>
