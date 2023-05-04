/* eslint-disable */
<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
</template>
<script>
// import HomePage from "@/HomePage.vue";
// import TestPage from "@/TestPage.vue";
// import IntroPage from "@/blog/BlogPage.vue";
// import MikuTap from "@/mikutap/MikuTap.vue";

import {ConfigProvider} from "ant-design-vue";

ConfigProvider.config({
  theme: {
    primaryColor: '#1abc9c',
  },
});
// 记录访客数
export default {
  components: {
    // MikuTap
    // IntroPage,
    // TestPage,
    // HomePage,
  },

}
</script>


<style scoped>

</style>
