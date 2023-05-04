<template>
  <div>
    <div style=" padding: 30px">
      <a-card hoverable title="个人简介" :head-style="{color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}"
              bordered=false
              :style="{width:'auto',background: (menuTheme === 'light'?'#fff':'#2c3e50'), color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">
        <template #extra><a :style="{color:(menuTheme === 'light'?'#1da57a':'#0063c0') }"
                            @click="$router.replace('/')">Home</a></template>
        <a-alert message="学业情况" type="info"/>
        <br>
        <p style="margin-left: 10px">目前就读于吉林大学本科</p>
        <a-alert message="个人数据" type="info"/>
        <br>
        <a-list bordered :data-source="data" style="margin-bottom: 10px">
          <a-list-item :style="{color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">身高：186cm</a-list-item>
          <a-list-item :style="{color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">体重：65kg</a-list-item>
          <a-list-item :style="{color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">性别：男</a-list-item>
          <template #header>
            <div :style="{color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">这是表头</div>
          </template>
        </a-list>
        <a-alert message="个人爱好" type="info"/>
        <br>
        <p :style="{marginLeft: '10px',color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">
          平时喜欢看动漫、玩游戏之类的活动，喜欢宅家，对于数码产品较为感兴趣</p>
      </a-card>
    </div>
    <div style=" padding: 30px">
      <a-card hoverable title="网页简介" :head-style="{color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}"
              bordered=false
              :style="{width:'auto',background: (menuTheme === 'light'?'#fff':'#2c3e50'), color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">
        <a-alert message="网页结构" type="info"/>
        <br>
        <p style="margin-left: 10px">1.主页：可导航至博客，Mikutap及本人一些其他平台的账号</p>
        <p style="margin-left: 10px">2.Mikutap：一个好玩的音乐网站</p>
        <p style="margin-left: 10px">3.博客：包含简介，文章，友链三部分</p>
        <p style="margin-left: 10px">4.简介：个人及网页的概括性介绍</p>
        <p style="margin-left: 10px">5.文章：一些技巧性文章或经验</p>
        <p style="margin-left: 10px">6.友链：一些友情链接</p>
      </a-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroPage",
  props: ['menuTheme'],
  setup() {
    return {
      alertTheme: {
        backgroundColor: '#2c3e50',
        // color: '#37a67e'
      },
      alertDarkTheme: {
        color: ''
      },
    }
  }

}
</script>

<style scoped>

</style>