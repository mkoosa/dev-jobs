<template>
  <button :class="buttonClass">{{ text }}<slot></slot></button>
</template>
<script setup>
import { computed, toRefs } from "vue"

const props = defineProps({
  text: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: false
  }
})

const { type } = toRefs(props)
const buttonClass = computed(() => {
  return {
    [type.value]: true // primary:type.value === 'primary'
  }
})
</script>

<style scoped>
.insideIcon,
.search-btn {
  width: 4.5rem;
  height: 4.5rem;
  color: var(--white);
  background: var(--violet);
  border: none;
  border-radius: .5rem;
}


.search-btn {
  width: 100%;
  font-size: 1.7rem;
  letter-spacing: .1rem;
  font-weight: 700;
  height: 5.2rem;
  margin-inline: 1.5rem;
}

.pagination__button {
  color: var(--violet);
  background: transparent;
  /* outline: none; */
  border: .2rem solid var(--violet);
  border-radius: 2.3rem;
  padding: .7em 0;
  width: 11rem;
  font-size: 1.4rem;
  font-weight: 700;
}

.pagination__button:nth-of-type(1) {
  margin-right: 1rem;
}

.company-btn {
  margin-top: 2rem;
  padding: .8em 1.2em;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--violet);
  background-color: var(--light-grey);
  border: none;
  border-radius: .5rem;
}

.apply-btn {
  margin: 3rem 0;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: .1rem;
  background: var(--violet);
  border: none;
  outline: none;
  color: var(--white);
  padding: .8em 0;
  border-radius: .5rem;
}

@media screen and (min-width: 768px) {
  .search-btn {
    margin-inline: initial;
    width: auto;
    height: auto;
    padding: .6em .8em;
    cursor: pointer;
  }

  .pagination__button:nth-of-type(1) {
    margin-right: 0;
  }

  .pagination__button {
    margin: 0;
    display: flex;
    justify-content: center;
    border-radius: 0;
    padding: .5rem;
    width: 0;
    cursor: pointer;
    border: none;
    width: 3rem;
  }

  .pagination__button {
    outline-color: var(--violet);
  }

  .company-btn{
    margin: 0;
  }

  .apply-btn{
    padding: 1.3rem 0;
    height: 80%;
    width: 14rem;
  }

  .apply-btn--desktop{
    padding: 1.8rem 0;
    margin-right: 4rem;    
  }
}
</style>