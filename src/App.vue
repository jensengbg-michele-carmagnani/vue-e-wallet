<template>
  <div id="app">
    <router-view :cardInfo="cardInfo" @cardInfo="listenInfoCard"/>
  </div>
</template>

<script>
export default {
  name: "app",
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
  methods:{
    listenInfoCard(value){
      console.log('value app', value)
      return this.cardInfo 
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
