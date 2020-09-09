<template>
  <div id="home">
    <h1>E-wallet</h1>
    <Top />
    <CardStack/>
    <Card/>
    <button @click="goTo">AddCard</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from "@/components/Top";
import CardStack from "@/components/CardStack";
import Card from "@/components/Card";

export default {
  name: "Home",
  components: {
    Top,
    Card,
    CardStack,
  },
  methods: {
    goTo() {
      this.$router.push("/AddCard");
    },
  },
};
</script>
<style lang="scss">
#home{
  display: flex;
  justify-content: center;
   align-items: center;
   flex-direction: column;
}


</style>