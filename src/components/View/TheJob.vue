<template>
  <div v-if="currentJob">
    <div class="job">
      <div class="job__header">
        <div class="job__logo"
         :style="{ backgroundColor: currentJob.logoBackground }"
         >
        <img
         class="logo"
          :src="srcPath(currentJob.company)" alt="logo company">
        </div>
        <div class="job__company">
          <div>
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
        <div class="offer__header">
          <div class="company__details">
            <p class="offer__type">
              <span>{{ currentJob.postedAt }}</span><span class="dot">.</span><span>{{ currentJob.contract }}</span>
            </p>
            <h2 class="offer__occupation">{{ currentJob.position }}</h2>
            <p class="offer__location">{{ currentJob.location }}</p>
          </div>
          <action-btn
           text="Aplly Now" 
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
          <ol
           class="task__list" 
           v-for="(item) in currentJob.role.items" :key="item"
           >
            <li class="task__list-element">{{ item }}</li>
          </ol>
        </div>
      </div>
    </div>
    <div class="job__footer job__footer--mobile ">
      <div class="footer__btn">
        <action-btn text="Apply Now" class="apply-btn" @click="openCompanyPage(currentJob.website)"/>
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
<script setup>

import ActionBtn from "@/components/Shared/ActionBtn.vue";
import TheSpinner from '@/components/Shared/TheSpinner.vue';

import { useRoute } from "vue-router"
import { computed, onMounted } from "vue";
import { jobStore } from "@/main";
import srcPath from '@/api/srcPath'

const route = useRoute();
const currentJob = computed(() => {
  let jobId = route.params.id
  let job = jobStore.jobs.filter((item) => item.id === +jobId) //pars to int
  return job[0]
})

const openCompanyPage = (page) => {
  window.location.href = page
}

onMounted(async () => {
  await jobStore.FETCH_JOBS();
})
</script>

<style scoped>
.job {
  padding-inline: 2rem;
  line-height: 2.6rem;
  position: relative;
  z-index: 200;
}

.job__logo {
  position: absolute;
  top: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.4rem;
  height: 5rem;
  border-radius: 1.5rem;
}
.job__header {
  margin: 0 auto;
  position: relative;
  top: -2rem;
  background: var(--white);
  text-align: center;
  z-index: 200;
  border-radius: 0.6rem;
  max-width: 45rem;
}
.job__company {
  padding: 3rem 0;
  padding-top: 0;
}
.company__name {
  padding-top: 5rem;
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--very-dark-blue);
}
.company__page {
  color: var(--dark-grey);
  margin-bottom: 0.5rem;
}
.job__offer {
  padding: 2rem;
  background: var(--white);
  border-radius: 0.5rem;
}
.offer__type {
  color: var(--dark-grey);
}

span {
  font-weight: 400;
}

.dot {
  margin-inline: 1rem;
  font-size: 3rem;
  font-weight: 600;
}
.offer__occupation {
  padding: 0.5rem 0;
  color: var(--very-dark-blue);
  font-size: 2rem;
  font-weight: 700;
}
.offer__location {
  margin-bottom: 2rem;
  color: var(--violet);
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1.4rem;
}
.offer__details {
  color: var(--middle-grey);
}
.requirements__heading {
  margin: 2.5rem 0;
  color: var(--very-dark-blue);
  font-size: 2rem;
  font-weight: 700;
}
.requirements__details {
  color: var(--middle-grey);
}
.requirements__list {
  margin: 2rem 0 2rem 1.5rem;
  color: var(--middle-grey);
  list-style: initial;
  font-size: 1.6rem;
}
.requirements__list-element {
  padding-left: 3rem;
  margin-bottom: 1rem;
}
.task__heading {
  text-transform: capitalize;
  margin: 2.5rem 0;
  color: var(--very-dark-blue);
  font-size: 2rem;
  font-weight: 700;
}
.task__details {
  color: var(--middle-grey);
}
.task__list {
  margin: 2rem 0 2rem 1.5rem;
  color: var(--middle-grey);
  font-size: 1.6rem;
}
.task__list-element {
  display: block;
  margin-bottom: 0.5em;
  margin-left: 2em;
}
.task__list-element::before {
  display: inline-block;
  content: ">";
  width: 2em;
  margin-left: -2em;
  color: var(--violet);
  font-weight: 700;
}
.job__footer {
  margin-top: 5rem;
  background: var(--white);
}
.job__footer--desktop {
  display: none;
}
.footer__btn {
  margin-inline: 2rem;
}
.spinner{
  margin-top: 20rem;
}

@media screen and (min-width: 768px) {
  .job {
    padding-inline: 4rem;
  }
  .job__offer {
    padding: 4rem;
  }
  .job__header {
    width: initial;
    display: flex;
    top: -3rem;
    height: 14rem;
    border-radius: 0.5rem;
    max-width: initial;
  }
  .job__logo {
    position: static;
    transform: initial;
    width: 15rem;
    margin: 0;
    border-radius: 0;
    padding: 0;
    height: 100%;
    border-radius: 0.5rem 0 0 0.5rem;
  }
  .job__company {
    width: 100%;
    padding: 0;
    padding-inline: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .company__details {
    flex-basis: 70%;
  }
  .company__name {
    font-size: 2.6rem;
  }
  .offer__header {
    display: flex;
    justify-content: space-between;
  }
  .offer__occupation {
    font-size: 2.7rem;
    padding: 1.5rem 0;
  }
  .job__footer--mobile {
    display: none;
  }
  .job__footer--desktop {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .footer__details {
    flex-basis: 70%;
    padding-left: 4rem;
  }
  .footer__occupation {
    color: var(--very-dark-blue);
    font-size: 2rem;
    font-weight: 700;
  }
  .footer__btn {
    margin-inline: 4rem;
    flex-grow: 1;
  }
  .designer {
    color: var(--middle-grey);
    padding: .5rem 0;
  }
}

@media screen and (min-width: 1024px) {
  .job__header {
    top: -6rem;
  }
  .job__offer {
    margin: 0 auto;
    max-width: 90rem;
  }
  .job__footer {
    margin: 0 auto;
  }
  .job__footer--desktop {
    margin: 0 auto;
    max-width: 90rem;
  }
}
</style>
