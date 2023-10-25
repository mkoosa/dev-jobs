<template>
  <div v-if="currentJob">
    <div class="job">
      <div class="job__header">
        <div class="job__logo" :style="{ backgroundColor: currentJob.logoBackground }">
          <img class="logo" :src="currentJob.logo" alt="logo company" />
        </div>
        <div class="job__company">
          <div class="about">
            <h1 class="company__name">{{ currentJob.company }}</h1>
            <p class="company__page">{{ currentJob.company.toLowerCase() + '.com' }}</p>
          </div>
          <action-btn
            text="Company Site"
            class="company-btn"
            @click="openCompanyPage(currentJob.website)"
          />
        </div>
      </div>
      <div class="job__offer">
        <the-close classIconElement="back" :action="backToJobResults" />
        <div class="offer__header">
          <div class="company__details">
            <p class="offer__type">
              <span>{{ currentJob.postedAt }}</span
              ><span class="dot">.</span><span>{{ currentJob.contract }}</span>
            </p>
            <h2 class="offer__occupation">{{ currentJob.position }}</h2>
            <p class="offer__location">{{ currentJob.location }}</p>
          </div>
          <action-btn
            text="Apply Now"
            class="apply-btn"
            @click="openCompanyPage(currentJob.website)"
          />
        </div>
        <p class="offer__details">
          {{ currentJob.content }}
        </p>
        <div class="offer__requirements">
          <h2 class="requirements__heading">Requirements</h2>
          <p class="requirements__details">
            {{ currentJob.description }}
          </p>
          <ul class="requirements__list" v-for="item in currentJob.requirements.items" :key="item">
            <li class="requirements__list-element">{{ item }}</li>
          </ul>
        </div>
        <div class="offer__task">
          <h2 class="task__heading">What you will do</h2>
          <p class="task__details">
            {{ currentJob.role.content }}
          </p>
          <ol class="task__list" v-for="item in currentJob.role.items" :key="item">
            <li class="task__list-element">{{ item }}</li>
          </ol>
        </div>
      </div>
    </div>
    <div class="job__footer job__footer--mobile">
      <div class="footer__btn">
        <action-btn
          text="Apply Now"
          class="apply-btn"
          @click="openCompanyPage(currentJob.website)"
        />
      </div>
    </div>
    <div class="job__footer">
      <div class="job__footer--desktop">
        <div class="footer__details">
          <h2 class="footer__occupation">{{ currentJob.position }}</h2>
          <p class="designer">So Digital Inc.</p>
        </div>
        <action-btn
          text="Apply Now"
          class="apply-btn apply-btn--desktop"
          @click="openCompanyPage(currentJob.website)"
        />
      </div>
    </div>
  </div>
  <div class="spinner" v-else>
    <the-spinner />
  </div>
</template>
<script lang="ts" setup>
import ActionBtn from '@/components/Shared/ActionBtn.vue';
import TheSpinner from '@/components/Shared/TheSpinner.vue';
import TheClose from '@/components/Shared/TheClose.vue';

import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted } from 'vue';
import { jobStore } from '@/main';

const route = useRoute();
const router = useRouter();
const currentJob = computed(() => {
  let jobId = route.params.id;
  let job = jobStore.jobs.filter((item) => item.id === +jobId); //pars to int
  return job[0];
});

const openCompanyPage = (page: string) => {
  window.location.href = page;
};

const backToJobResults = () => router.push({ name: 'Main' });

onMounted(async () => {
  // await jobStore.FETCH_JOBS();
});
</script>

<style scoped>
@import '@/assets/css/theJob.css';
</style>
