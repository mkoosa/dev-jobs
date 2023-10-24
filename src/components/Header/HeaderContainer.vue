<template>
  <div class="header">
    <div class="header__content">
      <header-heading />
      <switcher-color-schema />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SwitcherColorSchema from '@/components/Shared/SwitcherColorSchema.vue';
import HeaderHeading from '@/components/Header/HeaderHeading.vue';
</script>
