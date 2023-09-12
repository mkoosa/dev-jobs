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
.search-btn{
  width: 4.5rem;
  height: 4.5rem;
  color: var(--white);
  background: var(--violet);
  border: none;
  border-radius: .5rem;
}


.search-btn{
  width: 100%;
  font-size: 1.7rem;
  letter-spacing: .1rem;
  font-weight: 700;
  height: 5.2rem;
  margin-inline: 1.5rem;
  
}

@media screen and (min-width: 768px) {
  .search-btn{
    margin-inline:initial;
    width: auto;
    height: auto;
    padding: .6em .8em;
    cursor: pointer;
  }
}
</style>