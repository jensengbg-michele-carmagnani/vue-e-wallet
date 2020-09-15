<template>
  <section id="cardStack">
    <Card
      v-for="(card, ind) in cards"
      :key="ind"
      :cardData="card"
      :style="{zindex:10, marginTop: '-12.2rem'}"
      @carddata="showActiveCard"
    />
  </section>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "cardStack",
  components: {
    Card,
  },
  props: {
    cards: Array,
  },

  methods: {
    showActiveCard(card) {
      this.$emit("carddata", card);
    },
  },
  computed: {
    cardInfo() {
      return this.cards;
    },
  },
};
</script>


<style lang="scss" >
#cardStack {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 13rem;
  
}
</style>
