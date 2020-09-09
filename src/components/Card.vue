<template>
  <section id="card">
    <article class="vendor">
      <img src alt="chip" />
      <img src alt="chip" />
    </article>
    <article class="number">
      <p></p>
    </article>
    <article class="data">
      <h5>Card number{{cardInfo.cardNumber}}</h5>
      <h4>name{{cardInfo.name}}</h4>
      <h5>Valid thru{{cardInfo.valid}}</h5>
      <h4>Vendor: {{cardInfo.vendor}}</h4>
    </article>
  </section>
</template>

<script>
export default {
  name: "card",
  props: {
    cardInfo: Object,
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
