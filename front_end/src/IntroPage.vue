<template>
  <a-config-provider>
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
          <!--        <a-layout-sider width="200">-->
          <div layout="column center-center" style="margin-top: 50px; margin-bottom: 50px">
            <a-avatar id="avatar" :size="100" :src="icon"/>
            <br>
            <span>Kina Zhang</span>
            <br>
            <a-switch
                :checked="menuTheme === 'dark'"
                checked-children="Dark"
                un-checked-children="Light"
                @change="changeMenuTheme"
            />
          </div>
          <a-menu
              v-model:openKeys="openKeys"
              v-model:selectedKeys="selectedKeys"
              style="width: 100%"
              :mode="mode"
              :theme="menuTheme"
          >
            <a-menu-item key="1" :style="{ marginBottom:menuMarginBottom}">
              <template #icon>
                <UserOutlined style="margin-left: 50px"/>
              </template>
              简介

            </a-menu-item>
            <a-menu-item key="2" :style="{ marginBottom:menuMarginBottom }">
              <template #icon>
                <LaptopOutlined style="margin-left: 50px"/>
              </template>
              文章
            </a-menu-item>
            <a-menu-item key="3" :style="{ marginBottom:menuMarginBottom }">
              <template #icon>
                <NotificationOutlined style="margin-left: 50px"/>
              </template>
              友链
            </a-menu-item>
          </a-menu>

          <!--          <a-menu-->
          <!--              :style="{ height: '100%', borderRight: 0}"-->
          <!--              :theme="menuTheme"-->
          <!--              v-model:selectedKeys="current"-->
          <!--              v-model:openKeys="openKeys"-->
          <!--              mode="inline">-->
          <!--            <a-menu-item key="1" :style="{ marginBottom:menuMarginBottom }">-->
          <!--              <template #title>-->
          <!--              <span layout="row center-center">-->
          <!--                <user-outlined style="margin-right: 10px"/>-->
          <!--                简介-->
          <!--              </span>-->
          <!--              </template>-->
          <!--              &lt;!&ndash;            <a-menu-item key="1">option1</a-menu-item>&ndash;&gt;-->
          <!--              &lt;!&ndash;            <a-menu-item key="2">option2</a-menu-item>&ndash;&gt;-->
          <!--              &lt;!&ndash;            <a-menu-item key="3">option3</a-menu-item>&ndash;&gt;-->
          <!--              &lt;!&ndash;            <a-menu-item key="4">option4</a-menu-item>&ndash;&gt;-->
          <!--            </a-menu-item>-->
          <!--            <a-menu-item key="2" :style="{ marginBottom:menuMarginBottom }">-->
          <!--              <template #title>-->
          <!--              <span layout="row center-center">-->
          <!--                <laptop-outlined style="margin-right: 10px"/>-->
          <!--                文章-->
          <!--              </span>-->
          <!--              </template>-->
          <!--              &lt;!&ndash;            <a-menu-item key="5">option5</a-menu-item>&ndash;&gt;-->
          <!--              &lt;!&ndash;            <a-menu-item key="6">option6</a-menu-item>&ndash;&gt;-->
          <!--              &lt;!&ndash;            <a-menu-item key="7">option7</a-menu-item>&ndash;&gt;-->
          <!--              &lt;!&ndash;            <a-menu-item key="8">option8</a-menu-item>&ndash;&gt;-->
          <!--            </a-menu-item>-->
          <!--            <a-menu-item key="3" :style="{ marginBottom:menuMarginBottom }">-->
          <!--              <template #title>-->
          <!--              <span layout="row center-center">-->
          <!--                <notification-outlined style="margin-right: 10px"/>-->
          <!--               友链-->
          <!--              </span>-->
          <!--              </template>-->
          <!--              &lt;!&ndash;            <a-menu-item key="9">option9</a-menu-item>&ndash;&gt;-->
          <!--              &lt;!&ndash;            <a-menu-item key="10">option10</a-menu-item>&ndash;&gt;-->
          <!--              &lt;!&ndash;            <a-menu-item key="11">option11</a-menu-item>&ndash;&gt;-->
          <!--              &lt;!&ndash;            <a-menu-item key="12">option12</a-menu-item>&ndash;&gt;-->
          <!--            </a-menu-item>-->
          <!--          </a-menu>-->
        </a-layout-sider>
        <a-layout :style="{padding: '0 24px 24px', background: (menuTheme === 'light'?'#f0f2f5':'#002a52')}">
          <a-breadcrumb :style="{margin: '16px 0'}">
            <a-breadcrumb-item :style="{color:(menuTheme === 'light'?'#001529':'#fff')}">Home</a-breadcrumb-item>
            <!--          <a-breadcrumb-item>List</a-breadcrumb-item>-->
            <!--          <a-breadcrumb-item>App</a-breadcrumb-item>-->
          </a-breadcrumb>
          <a-layout-content
              :style="{ background: (menuTheme === 'light'?'#fff':'#001529'), color:(menuTheme === 'light'?'#001529':'#fff'),padding: '24px', margin: 0, minHeight: '280px',height:'80vh' }"
          >
            {{ menuTheme }}
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>
<script>
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons-vue';
import {reactive, ref, toRefs} from 'vue';
import {ConfigProvider} from 'ant-design-vue';

ConfigProvider.config({
  theme: {
    primaryColor: '#1890ff',
  },
});
export default {
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },
  setup() {
    const state = reactive({
      menuTheme: 'light',
      current: ['1'],
      // openKeys: ['sub1'],
      selectedKeys: ['1'],
      openKeys: ['sub1'],
    });
    // const current = ref(['1']);
    const changeMenuTheme = (checked) => {
      state.menuTheme = checked ? 'dark' : 'light';
      // theme.primaryColor = (checked === 'dark') ? 'grey' : 'white';
    };

    return {
      current: ref(['1']),
      collapsed: ref(false),
      openKeys: ref(['sub1']),
      icon: require("../public/img/icon.png"),
      menuMarginBottom: ref(40),

      theme: {
        backgroundColor: '#fff'
      },
      darkTheme: {
        backgroundColor: '#001529'
      },

      ...toRefs(state),
      changeMenuTheme,
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

// App.vue
* {
  /* 字体颜色 */
  color: var(--text-color);
  /* 背景颜色 */
  background-color: var(--bg-color);
}
</style>
