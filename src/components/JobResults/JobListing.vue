<template>
  <div class="job">
    <img class="logo" src="../../assets/logos/scoot.svg" alt="">
    <p class="job__type"><span>5h aho</span><span class="dot">.</span><span>Fullt Time</span></p>
    <h2 class="job__name">{{job.company}}</h2>
    <p class="job__company">scoot</p>
    <p class="job__location">Inited Kingdom</p>
  </div>
  
</template>

<script setup>
defineProps({
  job: {
    type: Object,
    required: true
  }

})
</script>

<style scoped>
.job {
  margin-bottom: 6rem;
  width: 100%;
  padding: 3.5rem 2.4rem;
  background: var(--white);
  position: relative;
}

.logo {
  position: absolute;
  left: 3rem;
  top: -2.7rem;
  background-color: orange;
  padding: 2em .7em;
  background: hsl(216, 46%, 14%);
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
</style>




