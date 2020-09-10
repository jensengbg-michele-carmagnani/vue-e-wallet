<template>
  <section id="card">
    <article class="vendor">
      <img src alt="chip" />
      
    </article>
    <article class="number">
      <p>Card number {{cardInfo.cardNumber}}</p>
    </article>
      
    <article class="data">
      <h5>Card number{{cardInfo.name}}</h5>
      <h4>name</h4>
      <h5>Valid thru</h5>
      <h4>Vendor: </h4>
    </article>
  </section>
</template>

<script>

export default {
  name: "card",
  props: {
    cardInfo: Object,
  },
  data(){
    return{
      cardNumber:"",
       name: "",
        valid: "",
        ccv: "",
        vendor: "",
    }
  },
  methods:{
    info(){
      console.log(this.cardInfo)
    }
  }
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
