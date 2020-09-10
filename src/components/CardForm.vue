<template>
  <section id="cardForm">
    <h2>CARD FORM</h2>
    <article class="form">
      <label>Card Number</label>
      <input type="text" v-model="cardInfo.cardNumber" @keyup="addInfo" />
    </article>
    <article class="form">
      <span>CardHolder name</span>
      <input type="text" v-model="cardInfo.name" @keyup="addInfo" />
    </article>
    <article class=" form valid-ccv">
      <div>
        <span>Valid Truh</span>
        <input type="text" v-model="cardInfo.valid" />
      </div>
      <div>
        <span>CCV</span>
        <input type="text" v-model="cardInfo.ccv" @keyup="addInfo" />
      </div>
    </article>
    <article class="form">
      <span>vendor </span>
      <select class="form" v-model="cardInfo.vendor" @click="addInfo">
        <option value="bitcoin">BITCOIN</option>
        <option value="ninjabank">NINJA BANK</option>
        <option value="blockchain">BLOCK CHAIN INC</option>
        <option value="evil">EVIL CORPORATION</option>
      </select>
    </article>
  </section>
</template>

<script>
export default {
  name: "cardForm",
  data() {
    return {
      cardInfo: {
        cardNumber: "",
        name: "",
        valid: "",
        ccv: "",
        vendor: "",
      },
    };
  },
  methods: {
    addInfo() {
      console.log(this.cardInfo);
      this.$emit("cardInfo", this.cardInfo),
        this.locaInfo(),
        console.log(this.cardInfo);
    },
    locaInfo() {
      return sessionStorage.setItem("newCard", this.cardInfo);
    },
  },
};
</script>

<style lang="scss">
#cardForm {
  width: 300px;
  input {
    width: 100%;
    padding: 8px;
  }
  .form {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
  .valid-ccv {
    flex-direction: row;
    justify-content: space-between;
  }
  .valid-ccv input {
    width: 100px;
  }
}
</style>
