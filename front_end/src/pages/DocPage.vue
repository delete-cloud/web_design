<template>
  <div>
    <div style=" padding: 30px">
      <a-card hoverable title="搭建网站过程及体会" :head-style="{color:(menuTheme === 'light'?'#001529':'#bdc3c7')}"
              bordered=false
              :style="{width:'auto',background: (menuTheme === 'light'?'#fff':'#2c3e50'), color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}"
              @click="$router.replace('/doc/docone')">
        <template #extra><a :style="{color:(menuTheme === 'light'?'#1da57a':'#0063c0') }"
                            @click="$router.replace('/')">Home</a></template>
        <a-alert message="记录本次静态网页作业的过程及从中得到的体会" type="info"/>
        <br>
        <a-tag color="#f50">Vue</a-tag>
        <a-tag color="#2db7f5">前端</a-tag>
      </a-card>
    </div>
    <!--    <div style=" padding: 30px">-->
    <!--      <a-card hoverable title="文章2" :head-style="{color:(menuTheme === 'light'?'#001529':'#bdc3c7')}"-->
    <!--              bordered="false"-->
    <!--              :style="{width:'auto',background: (menuTheme === 'light'?'#fff':'#2c3e50'), color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">-->
    <!--        <a-alert message="子标题2" type="info"/>-->
    <!--        <br>-->
    <!--        <p style="margin-left: 10px">2</p>-->
    <!--      </a-card>-->
    <!--    </div>-->
    <!--    <div style=" padding: 30px">-->
    <!--      <a-card hoverable title="文章3" :head-style="{color:(menuTheme === 'light'?'#001529':'#bdc3c7')}"-->
    <!--              bordered="false"-->
    <!--              :style="{width:'auto',background: (menuTheme === 'light'?'#fff':'#2c3e50'), color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">-->
    <!--        <a-alert message="子标题3" type="info"/>-->
    <!--        <br>-->
    <!--        <p style="margin-left: 10px">3</p>-->
    <!--      </a-card>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "DocPage",
  props: ['menuTheme'],
  setup() {
    return {}
  }

}
</script>

<style scoped>

</style>