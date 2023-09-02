<template>
  <form class="form" @submit.prevent="jobSearch">
    <form-elements element="text" :classElement="['form__element', 'mobile-view']">
      <font-awesome-icon class="form__icon icon-filter" :icon="['fas', 'filter']" />
      <text-input v-model="tittle" placeholder="Filter by tittle ..." />
      <action-btn type="insideIcon"><font-awesome-icon class="button-icon"
          :icon="['fas', 'magnifying-glass']" /></action-btn>
    </form-elements>
    <form-elements element="text" :classElement="['form__element', 'desktop-view']">
      <font-awesome-icon class="form__icon" :icon="['fas', 'magnifying-glass']" />
      <text-input v-model="tittle" placeholder="Filter by tittle ..." />
    </form-elements>
    <div class="flying-elements">

      <form-elements element="text"
        :classElement="['form__element', 'form__element--filter-by-location', 'flying-element']">
        <font-awesome-icon class="form__icon" :icon="['fas', 'location-dot']" />
        <text-input v-model="location" placeholder="Filter by location ..." />
      </form-elements>

      <form-elements element="checkbox" classLabel="label" forText="full-time" text="full-time"
        :classElement="['form__element', 'form__element--job-type', 'flying-element']">
        <action-btn type="search-btn" text="Search" />
      </form-elements>
    </div>
  </form>
</template>

<script setup>
import TextInput from "../Shared/TextInput.vue";
import ActionBtn from "../Shared/ActionBtn.vue";
import FormElements from "../Shared/FormElements.vue";
import { ref } from "vue";


const location = ref('')
const tittle = ref('')

const jobSearch = () => console.log('search');

</script>

<style>
.form {
  position: relative;
  top: -4rem;
  margin-inline: auto;
  width: min(40rem, 90%);
  background-color: var(--white);
  border-radius: 1rem;
}

.form__element {
  padding-inline: 2rem;
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
}


.form__element--job-type {
  justify-content: start;
  flex-wrap: wrap;
}

.form__element--filter-by-location {
  position: relative;
  justify-content: start;
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

.insideIcon {
  order: 2;
}

.icon-wrapper--filter {
  margin-right: 2rem;
}

.icon-filter {
  margin-right: 1.5rem;
  margin-left: auto;
}

.form__icon {
  margin-top: .5rem;
  font-size: 2.5rem;
  color: var(--light-violet);
}

.button-icon {
  font-size: 1.7rem;
}

::placeholder {
  color: var(--grey);
}

.label {
  padding: 3rem 2rem;
  font-size: 1.8rem;
  color: var(--very-dark-blue);
  font-weight: 700;
  letter-spacing: .05rem;
}

.flying-elements {
  padding: 0 0 2rem 0;
  top: 55%;
  left: 50%;
  width: min(40rem, 90%);
  transform: translate(-50%, -50%);
  position: fixed;
  background: var(--white);
  border-radius: .5rem;
  height: 24rem;

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
}

input[type="checkbox"]::before {
  content: "";
  width: 1em;
  height: 1em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--dark-grey);
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}

input[type="checkbox"]:focus {
  border: .2rem solid var(--grey);
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
  }

  .form__element {
    width: auto;
    flex-basis: 33%;
    justify-content: space-between
  }

  .flying-elements {
    all: initial;
    display: flex;
    flex-grow: 1;
  }

  .flying-element {
    flex-basis: 50%;
  }

  .flying-element:nth-of-type(2) {
    display: flex;
    justify-content: center;

  }

  .form__element--submit {
    flex-wrap: nowrap;
  }

  .label {
    font-size: 1.4rem;
    padding-inline: .7rem;
  }

  .form__element--filter-by-location {
    border-inline: .1rem solid var(--dark-grey-lower-opacity);
    border-radius: 0;
  }

  input[type="checkbox"] {
    width: 2em;
    height: 2em;
  }

  input[type="checkbox"]::before {
    content: "";
    width: .7em;
    height: .7em;
  }
}

@media only screen and (min-width:1024px) {
  .form {
    width: 80%;
  }

  .label {
    padding: 0 3rem 0 1.5rem;
  }
}
</style>