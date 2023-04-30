<template>
  <!--  <TestPage></TestPage>-->
  <router-view/>

  <!--  <IntroPage></IntroPage>-->
</template>
<script lang="ts">
import HomePage from "@/HomePage.vue";
import TestPage from "@/TestPage.vue";
import IntroPage from "@/blog/IntroPage.vue";


export default {
  components: {
    // IntroPage,
    // TestPage,
    // HomePage,
  },
  data() {
    return {
      // msg: "123"
    }
  }
};
</script>


<!-- <style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style> -->
