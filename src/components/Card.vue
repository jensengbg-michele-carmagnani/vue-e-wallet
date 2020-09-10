<template>
  <section id="card">
    <article class="vendor">
      <img src alt="chip" />
    </article>
    <article class="number">
      <p>Card number {{ cardInfo.cardNumber }}</p>
    </article>

    <article class="data">
      <span>Card number</span>
      <p>{{ infoCard.name }}</p>
      <span>name</span>
      <p>{{ infoCard.name }}</p>
      <span>Valid thru</span>
      <p>{{ infoCard.Valid }}</p>
      <span>CCV</span>
      <p>{{ infoCard.ccv }}</p>
      <span>Vendor:</span>
      <p>{{ infoCard.vendor }}</p>
    </article>
  </section>
</template>

<script>
export default {
  name: "card",
  props: {
    cardInfo: Object,
  },
  data() {
    return {
      infos: {
        cardNumber: "",
        name: "",
        valid: "",
        ccv: "",
        vendor: "",
      },
    };
  },
  computed: {
    infoCard() {
      return this.cardInfo ;
    },
  },
};
</script>

<style lang="scss" scope>
#card {
  width: 280px;
  height: 190px;
  border: 1px solid black;
  border-radius: 0.6rem;
}
</style>
