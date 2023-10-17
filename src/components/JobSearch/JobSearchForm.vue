<template>
  <form role="form" aria-label="look for jobs" class="form" @submit.prevent="jobSearch">
    <form-elements element="text" :classElement="['form__element', 'mobile-view']">
      <font-awesome-icon
        role="switch"
        @click="toggleClass"
        class="form__icon icon-filter"
        :icon="['fas', 'filter']"
      />
      <text-input v-model="tittle" placeholder="Filter by tittle ..." />
      <action-btn type="insideIcon"
        ><font-awesome-icon class="button-icon" :icon="['fas', 'magnifying-glass']"
      /></action-btn>
    </form-elements>
    <form-elements element="text" :classElement="['form__element', 'desktop-view']">
      <font-awesome-icon class="form__icon" :icon="['fas', 'magnifying-glass']" />
      <text-input v-model="tittle" placeholder="Filter by tittle ..." />
    </form-elements>
    <div data-testid="fl-elements" class="flying-elements" :class="addRemoveClass">
      <form-elements
        element="text"
        :classElement="[
          'form__element',
          'form__element--filter-by-location',
          'flying-element',
        ]"
      >
        <the-close :action="closeFlyingElements" classIconElement="close_icon" />
        <font-awesome-icon class="form__icon form__icon-location" :icon="['fas', 'location-dot']" />
        <text-input v-model="location" placeholder="Filter by location ..." />
      </form-elements>
      <form-elements
        @some-event="onlyFullTimeJob"
        element="checkbox"
        classLabel="label"
        forText="full-time"
        :text="changeButtonContent"
        :classElement="['form__element', 'form__element--job-type', 'flying-element']"
      >
        <action-btn role="button" type="search-btn" text="Search" />
      </form-elements>
    </div>
  </form>
</template>

<script setup>
import TextInput from "@/components/Shared/TextInput.vue";
import ActionBtn from "@/components/Shared/ActionBtn.vue";
import FormElements from "@/components/Shared/FormElements.vue";
import TheClose from "@/components//Shared/TheClose.vue";
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import { blurStore, userStore, jobStore } from "@/main";

const location = ref("");
const tittle = ref("");
const isActiveClass = ref(false);
const router = useRouter();

const jobSearch = () => {
  router.push({
    name: "Main",
    query: { tittle: tittle.value, location: location.value },
  });
  const options = [tittle.value, location.value];
  userStore.updateUserOptions(options);
  resetFormInputsValue();
  noResultsPage();
};

const noResultsPage = () => {
  if (!jobStore.FILTERED_JOBS_BY_RULES.length) {
    router.push({ name: "NoResults" });
  }
};

const removeBlurEffect = () => {
  isActiveClass.value = !isActiveClass.value;
};
const toggleClass = () => {
  removeBlurEffect();
  blurStore.ACTIVATE_BLUR();
  resetFormInputsValue();
};
const closeFlyingElements = () => {
  removeBlurEffect();
  blurStore.ACTIVATE_BLUR();
  resetFormInputsValue();
};

const resetFormInputsValue = () => {
  location.value = "";
  tittle.value = "";
};

const onlyFullTimeJob = () => (userStore.fullTime = !userStore.fullTime);
const addRemoveClass = computed(() => (isActiveClass.value ? "active" : ""));
const changeButtonContent = computed(() =>
  isActiveClass.value ? "Full Time Only" : "Full Time"
);
</script>
