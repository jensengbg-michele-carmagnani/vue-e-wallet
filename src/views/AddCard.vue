<template>
  <main id="addCard">
    <h2>Card to add</h2>
    <Top />
    <Card :cardInfo="infoForm" />
    <CardForm @cardInfo="formInfo" />
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
  props: {
    cardInfo: Object,
  },
  data() {
    return {
      infoForm: {
        cardNumber: "",
        name: "",
        valid: "",
        ccv: "",
        vendor: "",
      },
    };
  },

  methods: {
    formInfo(value) {
      console.log("value", value);
      this.infoForm = value;
      this.$emit("cardInfo", this.infoForm);
    },
    goBack() {
      this.$router.push("/");
    },
  },
  // checkInfo(){

  //   if(this.cardInfo.cardNumber.length < 16 && this.cardInfo.ccv.length < 3){
  //         return alert(`info not okay please correct them`)
  //        }
  // }
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
