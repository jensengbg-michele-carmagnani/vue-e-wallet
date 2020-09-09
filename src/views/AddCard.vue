<template>
  <main id="addCard">
    <h2>Card to add</h2>
    <Top />
    <Card @cardinfo="info" :info="info" />
    <CardForm />
    <button @click="goBack">addCard</button>
  </main>
</template>

<script>
import Top from "@/components/Top";
import Card from "@/components/Card";
import CardForm from "@/components/CardForm";

export default {
  name: "AddCard",
  components: {
    Top,
    Card,
    CardForm,
  },
  data() {
    return {
      info: Object,
    };
  },

  methods: {
    goBack() {
      this.$router.push("/");
    },
    // checkInfo(){

    //   if(this.cardInfo.cardNumber.length < 16 && this.cardInfo.ccv.length < 3){
    //         return alert(`info not okay please correct them`)
    //        }
    // }
  },
};
</script>

<style lang="scss">
#addCard {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
