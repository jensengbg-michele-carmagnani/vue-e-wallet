<template>
  <section id="cardForm">
    <h2>CARD FORM</h2>
    <article class="form">
      <label>Card Number</label>
      <input
        type="text"
        v-model="cardInfo.cardNumber"
        @keyup.enter="addInfo"
      />
    </article>
    <article class="form">
      <span>CardHolder name</span>
      <input type="text" v-model="cardInfo.name" @keyup.enter="addInfo" />
    </article>
    <article class=" form valid-ccv">
      <div>
        <span>Valid Truh</span>
        <input
          type="text"
          v-model="cardInfo.valid"
          @keyup.enter="addInfo(cardInfo)"
        />
      </div>
      <div>
        <span>CCV</span>
        <input type="text" v-model="cardInfo.ccv" @keyup.enter="addInfo" />
      </div>
    </article>
    <article class="form">
      <span>vendor
      </span>
      <select class="form" v-model="cardInfo" @keyup.enter="addInfo">
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
      methods: {
        addInfo() {
          let info = {
            cardNumber: this.cardInfo.cardNumber.value,
            name: this.cardInfo.name.value,
            valid: this.cardInfo.valid.value,
            ccv: this.cardInfo.ccv.value,
            vendor: this.cardInfo.vendor.value,
          };
          this.$emit("cardinfo", info);
        },
      },
    };
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
  .valid-ccv  input {
    
    width: 100px;


  }
}
</style>
