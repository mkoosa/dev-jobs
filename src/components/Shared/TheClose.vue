<template>
  <div @click="action">
    <font-awesome-icon data-testid="clos-Icon" :icon="['fas', 'xmark']" :class="classIconElement" />
  </div>
</template>

<script setup>
defineProps({
  action: {
    type: Function,
    required: true
  },
  classIconElement: {
    type: String,
    required: true
  }
})

</script>