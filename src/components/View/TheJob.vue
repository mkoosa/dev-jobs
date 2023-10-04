<template>
  <div class="job">
    <div class="job__header">
      <div class="job__logo"></div>
      <div class="job__company">
        <div>
          <h1 class="company__name">Scoot</h1>
          <p class="company__page">scoot.com</p>
        </div>
        <action-btn text="Company Site" class="company-btn"></action-btn>
      </div>
    </div>
    <div class="job__offer">
      <div class="offer__header">
        <div class="company__details">
          <p class="offer__type">
            <span>1w ago</span><span class="dot">.</span><span>Part time</span>
          </p>
          <h2 class="offer__occupation">Senior Software Engineer</h2>
          <p class="offer__location">United kingdom</p>
        </div>
        <action-btn text="Aplly Now" class="apply-btn"></action-btn>
      </div>
      <p class="offer__details">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla et illum saepe
        temporibus adipisci consequuntur neque ad deserunt sint aut minima porro sit,
        ipsum explicabo, maiores, possimus earum veritatis id assumenda. Maxime unde
        labore molestias placeat accusamus? Iure enim dolor rerum et perspiciatis fugit
        eius dolores. Omnis atque ratione exercitationem ea similique mollitia ipsa
        consequuntur explicabo. Aliquam nemo pariatur sed consectetur et? Architecto,
        tempore! Necessitatibus nesciunt repudiandae cum. Error voluptas delectus nostrum
        tenetur accusantium quas! Inventore dolore minima, facilis, temporibus voluptates
        quasi fugiat labore cupiditate ipsum corrupti doloremque at sit.
      </p>
      <div class="offer__requirements">
        <h2 class="requirements__heading">Requirements</h2>
        <p class="requirements__details">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis ullam, veritatis
          eveniet quia hic quidem totam porro dolore doloremque illum pariatur sapiente
          eligendi tenetur fuga voluptatum quis quos corporis quasi sequi impedit placeat
          magnam qui! A autem quis illum ratione?
        </p>
        <ul class="requirements__list">
          <li class="requirements__list-element">Lorem ipsum dolor sit amet.</li>
          <li class="requirements__list-element">Lorem ipsum dolor sit amet.</li>
          <li class="requirements__list-element">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita consectetur
            unde, quasi nihil voluptatum aut!.
          </li>
          <li class="requirements__list-element">Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
      <div class="offer__task">
        <h2 class="task__heading">What you will do</h2>
        <p class="task__details">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis magni
          laudantium, laborum ut natus saepe sequi repellendus. Laudantium atque,
          voluptatum tenetur officiis eius repudiandae dolorum alias. Ab adipisci facere,
          in error neque quos veritatis voluptas, laborum quibusdam non voluptatibus
          iusto, exercitationem iste quod. Omnis, molestiae?
        </p>
        <ol class="task__list">
          <li seq="1" class="task__list-element">Lorem ipsum dolor sit amet.</li>
          <li seq="2" class="task__list-element">Lorem ipsum dolor sit amet.</li>
          <li class="task__list-element">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita consectetur
            unde, quasi nihil voluptatum aut!.
          </li>
          <li seq="3" class="task__list-element">Lorem ipsum dolor sit amet.</li>
        </ol>
      </div>
    </div>
  </div>
  <div class="job__footer job__footer--mobile ">
    <div class="footer__btn">
      <action-btn text="Apply Now" class="apply-btn"></action-btn>
    </div>
  </div>
  <div class="job__footer">
    <div class="job__footer--desktop">
      <div class="footer__details">
        <h2 class="footer__occupation">Senior Software Engineer</h2>
        <p class="designer">So Digital Inc.</p>
      </div>
      <action-btn text="Apply Now" class="apply-btn apply-btn--desktop"></action-btn>
    </div>
  </div>
</template>

<script setup>
import ActionBtn from "@/components/Shared/ActionBtn.vue";
// import {useRoute} from "vue-router"
// import {computed} from "vue"
// const route = useRoute();

// const currenntJob = computed(()=> route.params.id)
</script>

<style scoped>
.job {
  padding-inline: 2rem;
  line-height: 2.6rem;
  position: relative;
  z-index: 200;
}

.job__logo {
  margin: 0 auto;
  transform: translateY(-2.5rem);
  width: 5rem;
  height: 5rem;
  background: orange;
  border-radius: 1rem;
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
  font-size: 1.9rem;
  margin-bottom: 1rem;
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
  counter-reset: item;
}

.task__list-element {
  display: block;
  margin-bottom: 0.5em;
  margin-left: 2em;
}

.task__list-element::before {
  display: inline-block;
  content: counter(item) "";
  counter-increment: item;
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
