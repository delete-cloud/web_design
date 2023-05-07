<template>
  <div class="full-screen" layout="column center-center">
    <transition name="fade" mode="out-in">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component"/>
        </keep-alive>
      </router-view>
    </transition>
    <div id="inner-part" layout="column top-center">
      <div layout="column top-center">
        <div id="icon" style="margin-top: 20px">
          <a-avatar :size="100" src="img/icon.png"/>
        </div>
        <h1 id="name" style="margin-top: 5px;font-family: monospace;color: #2a3a4a">Kina的小站</h1>
        <div class="typing">
          <span
              id="busuanzi_container_site_pv">欢迎来到本站，本站总访问量<span
              id="userCount"></span>次V(=^･ω･^=)v</span>
        </div>
        <a-divider style="height: 5px;background-color: #39C5BB"/>
      </div>
      <div id="nav-bar" layout="row center-center">
        <a-button class="button" size="auto" shape="round" @click="$router.replace('/blog/intro')">
          <HomeOutlined/>
          博客
        </a-button>
        <a-button class="button" size="auto" shape="round" @click="goToMikutap">
          <TagOutlined/>
          Mikutap
        </a-button>
        <a-dropdown :style="{borderRadius: '32px'}">
          <template #overlay>
            <a-menu @click="handleMenuClick">
              <a-menu-item key="Bilibili">
                <icon-font type="icon-bilibili-line"/>
                <a href="https://space.bilibili.com/401502235" target="_blank">Bilibili</a>
              </a-menu-item>
              <a-menu-item key="Github">
                <icon-font type="icon-github-line"/>
                <a href="https://github.com/delete-cloud" target="_blank">Github</a></a-menu-item>
            </a-menu>
          </template>
          <a-button shape="round">
            <NodeIndexOutlined/>
            其他
          </a-button>
        </a-dropdown>
      </div>
    </div>
    <a-tooltip title="Change Background" color="cyan">
      <a-button id="bg-change-btn"
                :style="{ width:'45px', height:'45px', borderRadius:'50%'}"
                @click="changeBackground">
        <icon-font type="icon-huanfu"/>
      </a-button>
    </a-tooltip>
  </div>

</template>
<script lang="js">
import {HomeOutlined, NodeIndexOutlined, TagOutlined} from '@ant-design/icons-vue';
import {createFromIconfontCN} from '@ant-design/icons-vue';
import router from "@/router";

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4045328_ojlyfk2zbyn.js',
});

export default {
  components: {
    HomeOutlined,
    TagOutlined,
    NodeIndexOutlined,
    IconFont,
  },
  setup() {
    const handleMenuClick = (e) => {
      console.log('click', e);
    };

    return {
      btn_name: [
        {name: "简介"},
        {name: "博客"},
        {name: "其他"},
      ],
      handleMenuClick,
    };
  },
  methods: {
    changeBackground() {
      const nextBg = this.$store.state.bgcount >= 3 ? 1 : this.$store.state.bgcount + 1
      this.$store.commit('changBgCount', nextBg)
      this.$router.replace(`/${nextBg}`)
    },
    goToMikutap() {
      const {href} = this.$router.resolve({
        path: "/mikutap",
      });
      window.open(href, '_blank');
      return Promise.resolve(false);
    }
  },
  mounted() {
    router.replace('1')
  }
};

</script>
<style lang="less" scoped>
.full-screen {
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: #969696;
  //z-index: -999999;

  //#test-div {
  //  z-index: auto;
  //}
  #inner-part {
    position: absolute;
    width: 62%;
    //height: 38%;
    //width: 900px;

    opacity: 88%;
    background-color: #ecf0f1;
    border-radius: 20px;
  }

  #background {
    //background: url(public/img/bg1.jpg);
    position: absolute;
    border: none;
    width: 100vw;
    background-size: cover;
    //height: 100vh;
    //z-index: -999999;
    max-height: none;
    max-width: none;
  }

  #head-div {
    //margin-bottom: 20px;
    width: 100%;
    //height: 100%;
    //margin: auto;
    //border: 3px solid #39C5BB;
    border: 0;
    border-radius: 50%;

    @icon_width: 100%;

    //#icon {
    //  width: @icon_width;
    //  height: @icon_width;
    //}
  }

  #nav-bar {
    margin-bottom: 15px;
    //margin: auto;
    width: 100%;
    //height: 100%;
    overflow: hidden;

    .button {
      margin-right: 15px
    }
  }

  .typing {
    color: #2a3a4a;
    font-size: 1.5em;
    width: auto;
    height: 1.5em;
    border-right: 1px solid transparent;
    animation: typing 2s steps(42, end), blink-caret .75s step-end infinite;
    font-family: Consolas, Monaco;
    word-break: break-all;
    overflow: hidden;
  }

  /* 打印效果 */
  @keyframes typing {
    from {
      width: 0;
    }

    to {
      width: 23em;
    }
  }

  /* 光标 */
  @keyframes blink-caret {

    from,
    to {
      border-color: white;
    }

    50% {
      border-color: currentColor;
    }
  }

  #bg-change-btn {
    margin-top: 75vh;
    margin-left: 88vw;
    opacity: 88%;
  }

  #bg-change-btn:hover {
    background-color: cyan;
    opacity: 68%;
  }

  // 背景渐变动画
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s ease;
  }

  .fade-leave-from,
  .fade-enter-to {
    opacity: 1;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}

</style>
