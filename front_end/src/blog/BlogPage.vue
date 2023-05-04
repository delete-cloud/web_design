<template>
  <a-layout>
    <a-layout-header class="header" :style="menuTheme === 'light'?theme:darkTheme">
      <div class="logo"/>
      <a-menu
          :theme="menuTheme"
          mode="horizontal"
          v-model:selectedKeys="current"
          :style="{ lineHeight: '64px' }"
      >
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" :style="menuTheme === 'light'?theme:darkTheme">
        <div layout="column center-center" style="margin-top: 50px; margin-bottom: 50px">
          <a-avatar id="avatar" :size="100" src="img/icon.png"/>
          <br>
          <span :style="{color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">Kina Zhang</span>
          <br>
          <a-button type="text"><a :style="{color:(menuTheme === 'light'?'#1da57a':'#0063c0')}"
                                   @click="$router.replace('/')">主页</a></a-button>
          <br>
          <a-switch
              :checked="menuTheme === 'dark'"
              checked-children="Dark"
              un-checked-children="Light"
              @change="changeMenuTheme"
              :style="{backgroundColor:menuTheme === 'dark'?'#1da57a':'#bfbfbf'}"
          />
        </div>
        <a-menu
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
            :mode="mode"
            :style="{backgroundColor:menuTheme === 'dark'?'#2c3e50':'#fff',width:'auto',color:(menuTheme === 'light'?'#001529':'#bdc3c7')}"
        >
          <a-menu-item key="1" :style="{ marginBottom:menuMarginBottom}"
                       @click="changeCurrentPage(1),$router.replace('/intro')">
            <template #icon>
              <UserOutlined style="margin-left: 50px"/>
            </template>
            简介
          </a-menu-item>
          <a-menu-item key="2" :style="{ marginBottom:menuMarginBottom }"
                       @click="changeCurrentPage(2),$router.replace('/doc')">
            <template #icon>
              <LaptopOutlined style="margin-left: 50px"/>
            </template>
            文章
          </a-menu-item>
          <a-menu-item key="3" :style="{ marginBottom:menuMarginBottom }"
                       @click="changeCurrentPage(3),$router.replace('/friend')">
            <template #icon>
              <NotificationOutlined style="margin-left: 50px"/>
            </template>
            友链
          </a-menu-item>
        </a-menu>
        <br>
        <div layout="column center-center" :style="{color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">
        </div>
      </a-layout-sider>
      <a-layout :style="{padding: '0 24px 24px', background: (menuTheme === 'light'?'#ecf0f1':'#34495e')}">
        <a-breadcrumb :style="{margin: '16px 0'}">
          <a-breadcrumb-item :style="{color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">{{ currentPage }}
          </a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
            :style="{ background: (menuTheme === 'light'?'#fff':'#2c3e50'), color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7'),padding: '24px', margin: 0, minHeight: '88vh',height:'auto' }"
        >
          <div>
            <transition name="fade" mode="out-in">
              <router-view v-slot="{ Component }" :menuTheme="menuTheme">
                <keep-alive>
                  <component :is="Component"/>
                </keep-alive>
              </router-view>
            </transition>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons-vue';
import {reactive, toRefs} from 'vue';

export default {
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },
  mounted() {
    // console.log(this.$refs.userCount.innerText)
  },
  setup() {
    const state = reactive({
      menuTheme: 'light',
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      currentPage: '简介',
    });
    const changeMenuTheme = (checked) => {
      state.menuTheme = checked ? 'dark' : 'light';
    };

    function changeCurrentPage(key) {
      if (key === 1) {
        state.currentPage = "简介";
      } else if (key === 2) {
        state.currentPage = "文章";
      } else {
        state.currentPage = "友链";
      }
    }

    return {
      current: ['1'],
      openKeys: ['sub1'],
      menuMarginBottom: 40,

      theme: {
        backgroundColor: '#fff'
      },
      darkTheme: {
        backgroundColor: '#2c3e50',
      },

      currentPage: [],
      ...toRefs(state),
      changeMenuTheme,
      changeCurrentPage
    };
  },

}
</script>
<style lang="less" scoped>

#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}

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

</style>
