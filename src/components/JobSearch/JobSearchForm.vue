<template>
  <form
   role="form" 
   aria-label="look for jobs" 
   class="form" @submit.prevent="jobSearch"
   >
    <form-elements 
    element="text" 
    :classElement="['form__element', 'mobile-view']"
    >
    <font-awesome-icon
     role="switch"
    @click="toggleClass"
     class="form__icon icon-filter"
      :icon="['fas', 'filter']"
       />
    <text-input v-model="tittle" placeholder="Filter by tittle ..." />
    <action-btn type="insideIcon"><font-awesome-icon class="button-icon"
          :icon="['fas', 'magnifying-glass']" /></action-btn>
    </form-elements>
    <form-elements
     element="text" 
     :classElement="['form__element', 'desktop-view']"
     >
    <font-awesome-icon class="form__icon" :icon="['fas', 'magnifying-glass']" />
    <text-input
     v-model="tittle" 
     placeholder="Filter by tittle ..." />
    </form-elements>
    <div
     data-testid="fl-elements" 
     class="flying-elements" 
     :class="addRemoveClass">
    <form-elements
     element="text"
     :classElement="['form__element', 'form__element--filter-by-location', 'flying-element']">
      <the-close
       :action="closeFlyingElements" 
       classIconElement="close_icon" />
    <font-awesome-icon
      class="form__icon" 
      :icon="['fas', 'location-dot']" />
    <text-input v-model="location" placeholder="Filter by location ..." />
    </form-elements>
    <form-elements
      element="checkbox" 
      classLabel="label" 
      forText="full-time" 
      :text="changeButtonContent"
      :classElement="['form__element', 'form__element--job-type', 'flying-element']">
    <action-btn
     role="button" 
     type="search-btn" 
     text="Search" 
     />
    </form-elements>
    </div>
  </form>
</template>

<script setup>
import TextInput from "@/components/Shared/TextInput.vue";
import ActionBtn from "@/components/Shared/ActionBtn.vue";
import FormElements from "@/components/Shared/FormElements.vue";
import TheClose from "@/components//Shared/TheClose.vue";
import { useRouter } from "vue-router"
import { ref, computed } from "vue";
import {blurStore} from "@/main";

const location = ref('');
const tittle = ref('');
const isActiveClass = ref(false);
const router = useRouter();

const jobSearch = () => {
  router.push({
    name: "Main",
    query: { tittle: tittle.value, location: location.value }
  })
};

const removeBlurEffect = () => {
  isActiveClass.value = !isActiveClass.value
}

const toggleClass = () => {
  removeBlurEffect();
  blurStore.ACTIVATE_BLUR();
  
}

const closeFlyingElements = () => {
  removeBlurEffect()
  blurStore.ACTIVATE_BLUR();
};


const addRemoveClass = computed(() => isActiveClass.value ? "active" : "");
const changeButtonContent = computed(() => isActiveClass.value ? "Full Time Only" : "Full Time")
</script>

<style>
.form {
  position: fixed;
  top: 10rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 93%;
  max-width: 45rem;
  background-color: var(--white);
  border-radius: .7rem;
  z-index: 5;
}

.form::after {
  position: absolute;
  bottom: -2rem;
  left: 0;
  content: '';
  width: 100%;
  height: 2rem;
  background-color: var(--light-grey);
  z-index: 100;
}

.blur .form::after{
  display: none;

}
.form__element {
  max-width: inherit;
  padding-inline: 1.6rem;
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form__element--job-type {
  justify-content: start;
  display: flex;
  flex-wrap: wrap;
}

.form__element--filter-by-location {
  position: relative;
  justify-content: start;
  margin-inline: 1.5rem;
  margin-inline: 1.5rem;
}

.form__element--filter-by-location::after {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  background-color: var(--grey);
  height: .1rem;
  width: 100%;
  opacity: .3;
}

.desktop-view {
  display: none;
}

.mobile-view .icon-filter {
  order: 1;
}

.mobile-view::after {
  position: absolute;
  content: '';
  opacity: .4;
  z-index: 4;
  background-color: var(--light-grey);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
}

.blur .mobile-view::after {
  display: flex;
}

.insideIcon {
  order: 2;
}

.icon-wrapper--filter {
  margin-right: 2rem;
}

.icon-filter {
  margin-right: 2rem;
  margin-left: auto;
}

.form__icon {
  margin-top: .5rem;
  font-size: 2.3rem;
  color: var(--violet);
}

.button-icon {
  font-size: 1.7rem;
}

::placeholder {
  color: var(--dark-grey);
  font-size: 1.7rem;
}

.label {
  padding: 3rem 2rem;
  font-size: 1.8rem;
  color: var(--very-dark-blue);
  font-weight: 800;
  letter-spacing: .05rem;
}

.flying-elements {
  top: 45%;
  left: 50%;
  width: min(45rem, 90%);
  transform: translate(-50%, -50%);
  position: fixed;
  background: var(--white);
  border-radius: .5rem;
  height: 24rem;
  display: none;
}

.flying-elements.active {
  display: block;
}

/* chekbox styling */
input[type="checkbox"] {
  appearance: none;
  display: grid;
  place-content: center;
  background-color: var(--light-grey);
  font: inherit;
  color: currentColor;
  width: 2.8em;
  height: 2.8em;
  border-radius: 0.3em;
  transform: translateY(-0.075em);
  outline: none;
  margin-left: 1.5rem;
  outline-color: var(--violet)
}

input[type="checkbox"]::before {
  content: "";
  width: 1em;
  height: 1em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--dark-grey);
  outline-color: var(--violet)
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
  outline-color: var(--violet)
}

input[type="checkbox"]:focus {
  /* border: .2rem solid var(--grey); */
}

@media only screen and (min-width:768px) {
  .mobile-view {
    display: none;
  }

  .desktop-view {
    display: flex;
  }

  .form {
    width: 90%;
    display: flex;
    max-width: 125rem;
  }

  .form::after {
    bottom: -3rem;
    height: 3rem;
  }

  .form__element {
    width: auto;
    flex-basis: 33%;
    justify-content: center;
  }

  .flying-elements {
    all: initial;
    display: flex;
    flex-grow: 1;
  }

  .flying-element {
    flex-basis: 50%;
  }

  .flying-elements.active {
    display: flex;
  }

  .flying-element:nth-of-type(2) {
    display: flex;
    justify-content: center;
  }

  .form__element--submit {
    flex-wrap: nowrap;
  }

  .label {
    font-size: 1.6rem;
    padding-inline: .7rem;
    font-weight: 700;
    width: max-content;
  }

  .form__element--filter-by-location {
    border-inline: .1rem solid var(--dark-grey-lower-opacity);
    border-radius: 0;
  }

  .form__element--job-type {
    flex-wrap: nowrap;
  }

  input[type="checkbox"] {
    width: 1.8em;
    height: 1.8em;
    cursor: pointer;
  }

  input[type="checkbox"]::before {
    content: "";
    width: .7em;
    height: .7em;
  }
}

@media only screen and (min-width:1024px) {
  .form {
    top: 11rem;
  }

  .label {
    padding: 0 3rem 0 2rem;
    padding-inline: 2rem;
  }
}

@media only screen and (min-width:1200px) {
  .label {
    font-size: 1.8rem;
  }

  .form__icon {
    font-size: 2.8rem;
  }
}
</style>