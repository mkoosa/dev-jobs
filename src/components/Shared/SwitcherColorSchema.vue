<template>
  <div class="switcher">
    <img src="../../../src/assets/desktop/icon-sun.svg" alt="sun">
    <div role="button" class="toggle-container" @click="CHANGE_COLOR_SCHEMA">
      <div class="circle"></div>
    </div>
    <font-awesome-icon :class="['moon', 'icon']" :icon="['fas', 'moon']" />
  </div>
</template>

<script setup>
import {colorSchemaStore} from '@/main';

const CHANGE_COLOR_SCHEMA =  colorSchemaStore.CHANGE_COLOR_SCHEMA;
</script>



