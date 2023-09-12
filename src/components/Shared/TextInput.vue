<template>
  <input class="form__input" type="text" :value="modelValue" :placeholder="placeholder" @input="handleInput">
</template>
<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  }
})

const emit = defineEmits(["update:modelValue"]);
const handleInput = (event) => {
  const target = event.target;
  emit("update:modelValue", target.value)
}

</script>

<style scoped>
.form__input {
  width: 55%;
  padding: .5em 1em;
  outline: none;
  font-size: 1.5rem;
  border: none;
  color: var(--grey);
}

:focus {
  border-bottom: .1rem solid var(--grey);
  margin-left: 1rem;
}

@media screen and (min-width:768px) {
  .form__input {
    margin-left: 1.5rem;
  }
}
</style>