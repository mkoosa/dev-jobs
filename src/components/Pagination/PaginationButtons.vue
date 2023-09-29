<template>
  <div class="pagination__buttons mobile-view">
    <router-link :to="{ name: 'Main', query: { page: previousPage } }">
      <action-btn v-if="previousPage" type="pagination__button" currentPage="currentPage">
        <font-awesome-icon class="arrow arrow-left" :icon="['fas', 'arrow-left']" />
        {{ previous }}
      </action-btn>
    </router-link>
    <slot></slot>
    <router-link :to="{ name: 'Main', query: { page: nextPage } }" data-testid="nextBtn">
      <action-btn v-if="nextPage" type="pagination__button" currentPage="currentPage">
        {{ next }}
        <font-awesome-icon class="arrow arrow-right" :icon="['fas', 'arrow-right']" />
      </action-btn>
    </router-link>
  </div>
  <div class="pagination__buttons desktop-view">
    <router-link :to="{ name: 'Main', query: { page: previousPage } }">
      <action-btn v-if="previousPage" type="pagination__button" currentPage="currentPage">
        <font-awesome-icon class="arrow arrow-left" :icon="['fas', 'arrow-left']" tabindex="1" />
      </action-btn>
    </router-link>
    <slot></slot>
    <router-link :to="{ name: 'Main', query: { page: nextPage } }">
      <action-btn v-if="nextPage" class="some" type="pagination__button" currentPage="currentPage">
        <font-awesome-icon class="arrow arrow-right" :icon="['fas', 'arrow-right']" tabindex="1" />
      </action-btn>
    </router-link>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import ActionBtn from '@/components/Shared/ActionBtn.vue';
import { paginationStore } from "@/main";

const previousPage = computed(() => paginationStore.PREVIOUS_PAGE)
const nextPage = computed(() => paginationStore.NEXT_PAGE)

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
    justify-content: center;
  }

  .arrow-left {
    margin-right: -.5rem;
    margin-left: 1rem;
  }

  .arrow-right {
    margin-left: 0rem;
    margin-right: 1.4rem;
  }

  .desktop-view {
    display: flex;
  }

  .mobile-view {
    display: none;
  }
}
</style>