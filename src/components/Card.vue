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
      <h5>Card number</h5>
      <h4>name</h4>
      <h5>Valid thru </h5>
      <h4>Valid</h4>

    </article>
  </section>
</template>

<script>
export default {
  name: "card",
  props:{
    info:Object  
  }
 
};
</script>

<style lang="scss" scope>
  #card{
    width: 280px;
    height: 190px;
    border: 1px solid black;
    border-radius: 0.6rem;
  }
</style>