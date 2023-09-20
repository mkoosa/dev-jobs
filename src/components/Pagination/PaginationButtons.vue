<template>
  <div class="pagination__buttons mobile-view">
    <action-btn v-if="currentPage" type="pagination__button" currentPage="currentPage">
      <font-awesome-icon class="arrow arrow-left" :icon="['fas', 'arrow-left']" />
      {{ previous }}
    </action-btn>
    <slot></slot>
    <action-btn v-if="currentPage < 3" type="pagination__button" currentPage="currentPage">
      {{ next }}
      <font-awesome-icon class="arrow arrow-right" :icon="['fas', 'arrow-right']" />
    </action-btn>
  </div>
  <div class="pagination__buttons desktop-view">
    <action-btn v-if="currentPage" type="pagination__button" currentPage="currentPage" tabindex="1">
      <font-awesome-icon class="arrow arrow-left" :icon="['fas', 'arrow-left']" />
    </action-btn>
    <slot></slot>
    <action-btn v-if="currentPage < 3" type="pagination__button" currentPage="currentPage" tabindex="1">
      <font-awesome-icon class="arrow arrow-right" :icon="['fas', 'arrow-right']" />
    </action-btn>
  </div>
</template>

<script setup>
import { ref } from "vue"
import ActionBtn from '@/components/Shared/ActionBtn.vue';

defineProps({
  currentPage: {
    type: Number,
    required: true
  }
})

const previous = ref('Previous');
const next = ref('Next');

</script>

<style scoped>
.desktop-view {
  display: none;
}

.arrow-left {
  margin-right: .7rem;
}

.arrow-right {
  margin-left: .7rem;

}

@media only screen and (min-width:768px) {
  .pagination__buttons {
    display: flex;
    align-items: center;
  }

  .desktop-view {
    display: flex;
  }

  .mobile-view {
    display: none;
  }

}
</style>