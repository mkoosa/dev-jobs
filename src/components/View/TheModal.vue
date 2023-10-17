<template>
  <div>
    <a-modal v-model:open="open" title="This website uses cookies" @ok="handleOk">
      <p class="modal-paragraph">We use cookies to personalize content and ads, to provide social media features and to analyse our traffic. We
        also share information about your use of our site with our social media, advertising and analytics partners who
        may combine it with other information that you’ve provided to them or that they’ve collected from your use of
        their services.</p>
    </a-modal>
  </div>
</template>
<script setup>
import useModalStore from '@/stores/modal';
import { ref, watchEffect} from 'vue';
import Storage from '@/api/storage';

const open = ref(false);
const modalStore = useModalStore();
const prepareStorage =() => new Storage('modal', true) 

const showModal = () => {
  open.value = true;
};

const confirmStorage = () => {
  const storage = prepareStorage();
  storage.setStorage();

}
const handleOk = e => {
  if(e.target.innerText === "OK") confirmStorage();
  open.value = false;
};

watchEffect(() => {
  if (modalStore.ACTIVE_MODAL) {
    showModal()
  }
})
</script>
