<template>
  <div class="job">
    <div class="logo-wrapper" :style="{ backgroundColor: job.logoBackground }">
      <img class="logo" :src="srcPath(job.company)" alt="logo company">
    </div>
    <p class="job__type"><span>{{ job.postedAt }}</span><span class="dot">.</span><span>{{ job.contract }}</span></p>
    <h2 class="job__name">{{ job.position }}</h2>
    <p class="job__company">{{ job.company }}</p>
    <p class="job__location">{{ job.location }}</p>
  </div>
</template>

<script setup>

defineProps({
  job: {
    type: Object,
    required: true
  }

})

const srcPath = (company) => {
  return `/src/assets/logos/${company.toLowerCase()}.svg`
};


</script>

<style scoped>
.job {
  margin-inline: auto;
  margin-bottom: 6rem;
  padding: 3.5rem 2.4rem;
  background: var(--white);
  position: relative;
  max-width: 38rem;

}

.logo-wrapper {
  position: absolute;
  top: -2.5rem;
  left: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.4rem;
  height: 5rem;
  border-radius: 1.5rem;
}


.job__type,
.job__company {
  font-size: 1.7rem;
  color: var(--dark-grey);
  text-transform: capitalize;
}

.dot {
  margin-inline: 1rem;
  font-weight: 800;
  font-size: 3rem;
}

.job__name {
  margin-top: 1.2rem;
  font-size: 2rem;
  font-weight: 700;
  color: var(--dark);
}

.job__company {
  margin-top: 1.2rem;
}

.job__location {
  margin-top: 4rem;
  color: var(--violet);
  font-size: 1.5rem;
  font-weight: 600;
}

@media only screen and (min-width:768px) {
  .job {
    flex-basis: 100%;
    margin: 3rem .8rem;
    max-width: 35rem;
    
  }

}
@media only screen and (min-width:1024px) {
  .job {
    flex-basis: 100%;
    /* margin: 3rem; */
    
  }

}
</style>




