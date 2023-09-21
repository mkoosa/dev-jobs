<template>
  <div class="job">
    Job {{ currenntJob }}
  </div>
  
</template>

<script setup>
import {useRoute} from "vue-router"  
import {computed} from "vue"
const route = useRoute();

const currenntJob = computed(()=> route.params.id)


</script>


<style scoped>
.job{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  height: 40rem;
}

</style>