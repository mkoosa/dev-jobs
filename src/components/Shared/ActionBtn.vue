<template>
  <button :class="buttonClass">{{ text }}<slot></slot></button>
</template>
<script setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
});

const { type } = toRefs(props);
const buttonClass = computed(() => {
  return {
    [type.value]: true, // primary:type.value === 'primary'
  };
});
</script>

<style scoped>
.insideIcon,
.search-btn {
  width: 4.5rem;
  height: 4.5rem;
  color: var(--white);
  background: var(--violet);
  border: none;
  border-radius: 0.5rem;
}

.search-btn {
  width: 100%;
  font-size: 1.7rem;
  letter-spacing: 0.1rem;
  font-weight: 700;
  height: 5.2rem;
  margin-inline: 1.5rem;
}
.pagination__button {
  color: var(--violet);
  background: transparent;
  border: 0.2rem solid var(--violet);
  border-radius: 2.3rem;
  padding: 0.7em 0;
  width: 11rem;
  font-size: 1.4rem;
  font-weight: 700;
}

.pagination__button:nth-of-type(1) {
  margin-right: 1rem;
}

.company-btn {
  margin-top: 2rem;
  padding: 0.8em 1.2em;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--violet);
  background-color: var(--light-grey);
  border: none;
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.dark-theme .company-btn {
  background: var(--midnight-light);
  transition: all 0.2s;
}

.apply-btn {
  margin: 3rem 0;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  background: var(--violet);
  border: none;
  outline: none;
  color: var(--white);
  padding: 0.8em 0;
  border-radius: 0.5rem;
}
.cancel-btn {
  background: var(--violet);
  font-size: 1.3em;
  padding: 0.5em 1em;
  color: var(--white);
  text-transform: uppercase;
  outline: none;
  border: none;
  border-radius: 0.3rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  transition: all 0.2s;
}
.dark-theme .cancel-btn {
  background: transparent;
  font-size: 1.3em;
  padding: 0.5em 1em;
  color: var(--violet);
  border: .1rem solid var(--violet);
  transition: all 0.2s;
}

@media screen and (min-width: 768px) {
  .search-btn {
    margin-inline: initial;
    width: auto;
    height: auto;
    padding: 0.6em 0.8em;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .search-btn:hover {
    background-color: var(--light-violet);
  }
  .pagination__button:nth-of-type(1) {
    margin-right: 0;
  }
  .pagination__button {
    margin: 0;
    display: flex;
    justify-content: center;
    border-radius: 0;
    padding: 0.5rem;
    width: 0;
    cursor: pointer;
    border: none;
    width: 3rem;
  }
  .pagination__button {
    outline-color: var(--violet);
  }
  .company-btn {
    margin: 0;
    cursor: pointer;
    transition: all 0.2s;
  }
  .dark-theme .company-btn {
    color: var(--white);
    transition: all 0.2s;
    background: var(--dark-btn);
  }
  .dark-theme .company-btn:hover {
    color: var(--white);
    transition: all 0.2s;
    background: var(--dark-btn--hover);
  }

  .company-btn:hover {
    background: var(--light-violet);
    color: var(--violet);
  }
  .apply-btn {
    padding: 1.3rem 0;
    height: 80%;
    width: 14rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .apply-btn:hover {
    background-color: var(--light-violet);
  }
  .apply-btn--desktop {
    padding: 1.65rem 0;
    margin-right: 4rem;
  }
}
</style>
