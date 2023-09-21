<template>
  <div v-if="element == 'text'" :class="classElement">
    <slot></slot>
  </div>
  <div v-if="element == 'checkbox'" :class="classElement">
    <input type="checkbox" id="full-time" />
    <label role="label" :class="classLabel" :for="forText">{{ text }}</label>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  element: {
    type: String,
    required: true,
  },
  classLabel: {
    type: String,
  },
  forText: {
    type: String,
  },

  text: {
    type: String,
  },
  classElement: {
    type: Object,
    required: true,
  },
});
</script>
