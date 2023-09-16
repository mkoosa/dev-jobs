<template>
  <div @click="action">
    <font-awesome-icon data-testid="clos-Icon" :icon="['fas', 'xmark']" :class="classElementIcon" />
  </div>
</template>

<script setup>
defineProps({
  action: {
    type: Function,
    required: true
  },
  classElementIcon: {
    type: String,
    required: true
  }
})

</script>