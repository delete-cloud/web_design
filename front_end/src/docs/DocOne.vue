<template>
  <a-typography>
    <a-typography-title :level="2" :style="{color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">涉及的技术
    </a-typography-title>
    <ul>
      <li>
        <a-typography-link href="https://cn.vuejs.org/" target="_blank"
                           :style="{color:(menuTheme === 'light'?'#1da57a':'#0063c0') }">
          Vue.js 3.0
        </a-typography-link>
      </li>
      <li>
        <a-typography-link href="https://antdv.com" target="_blank"
                           :style="{color:(menuTheme === 'light'?'#1da57a':'#0063c0') }">
          Ant Design Vue--一套ui组件库
        </a-typography-link>
      </li>
      <li>
        <a-typography-link href="https://less.devjs.cn/" target="_blank"
                           :style="{color:(menuTheme === 'light'?'#1da57a':'#0063c0') }">
          Less--一款具有预处理器的css语言
        </a-typography-link>
      </li>
    </ul>
    <a-typography-title :level="2" :style="{color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">准备工作
    </a-typography-title>
    <a-typography-paragraph :style="{color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">
      之前有了解到Vue.js这款框架在前端方面有较为广泛的应用，且具有相对完备的中文文档，因此决定采用Vue进行网页的搭建工作
    </a-typography-paragraph>
    <a-typography-paragraph :style="{color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">
      Less具有预处理器功能，可以更为便利地进行css的编写工作
    </a-typography-paragraph>
    <a-typography-paragraph :style="{color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">
      现有的第三方UI库种类多且相对齐全，选择了较为简洁的Ant Design Vue
    </a-typography-paragraph>
    <a-typography-paragraph>

    </a-typography-paragraph>
    <a-typography-title :level="2" :style="{color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">搭建过程
    </a-typography-title>
    <a-typography-paragraph :style="{color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">
      Vue是以组件为单位，进行前端部署工作，每个组件包含template(与html相似),script与style三部分构成，体现出了面向对象的思想
    </a-typography-paragraph>

    <a-typography-paragraph :style="{color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">
      <ul>
        <li>
          <a-typography-text mark>遇到的难题及部分解决方案</a-typography-text>
        </li>
      </ul>
    </a-typography-paragraph>

    <a-typography-paragraph :style="{color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">
      <blockquote>1.明暗主题切换</blockquote>
      <pre>因为对Vue不够了解，刚开始搭建时只会使用组件自带的主题切换功能，导致整体的主题色受制于部分组件，后来了解到可以通过Vue动态式改变组件style的方式更改组件的样式，因此实现了暗色主题下更和谐的颜色布局</pre>
      <blockquote>2.路由功能的配置</blockquote>
      <pre>查阅Vue Router官方文档后成功配置</pre>
      <blockquote>3.Mikutap的移植</blockquote>
      <pre>从Mikutap官网的源代码中挑选主体部分进行移植，途中遇到了本地依赖出错的问题，最后对源代码做出了一些修改并保留了源码中自带的cdn，由于vue加载cdn依赖于vue-cli自带的service worker，而service worker并不支持本地file协议打开静态资源，导致打包后的文件需要挂载在服务器上运行，后续通过部署在github pages上实现</pre>
    </a-typography-paragraph>
  </a-typography>
</template>

<script>
export default {
  name: "DocOne",
  props: ['menuTheme'],
  setup() {
    return {};
  },
}
</script>

<style scoped>

</style>