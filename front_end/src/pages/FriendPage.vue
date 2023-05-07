<template>
  <div>
    <div style=" padding: 30px">
      <a-card hoverable title="LHabc" :head-style="{color:(menuTheme === 'light'?'#001529':'#bdc3c7')}"
              bordered=false
              :style="{width:'auto',background: (menuTheme === 'light'?'#fff':'#2c3e50'), color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">
        <template #extra><a :style="{color:(menuTheme === 'light'?'#1da57a':'#0063c0') }"
                            @click="$router.replace('/' + $store.state.bgcount)">Home</a></template>
        <a-alert message="LHabc的博客" type="info"/>
        <br>
        <p style="margin-left: 10px"><a :style="{color:(menuTheme === 'light'?'#1da57a':'#0063c0') }"
                                        href="https://lhabc-me.github.io/">https://lhabc-me.github.io/</a></p>
      </a-card>
    </div>
    <div style=" padding: 30px">
      <a-card hoverable title="ChtJT" :head-style="{color:(menuTheme === 'light'?'#001529':'#bdc3c7')}"
              bordered=false
              :style="{width:'auto',background: (menuTheme === 'light'?'#fff':'#2c3e50'), color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">
        <a-alert message="ChtJT的博客" type="info"/>
        <br>
        <p style="margin-left: 10px"><a :style="{color:(menuTheme === 'light'?'#1da57a':'#0063c0') }"
                                        href="https://chtjt.github.io/">https://chtjt.github.io/</a></p>
      </a-card>
    </div>
    <!--    <div style=" padding: 30px">-->
    <!--      <a-card title="友链3" :head-style="{color:(menuTheme === 'light'?'#001529':'#bdc3c7')}"-->
    <!--              bordered="false"-->
    <!--              :style="{width:'auto',background: (menuTheme === 'light'?'#fff':'#2c3e50'), color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}">-->
    <!--        <a-alert message="学业情况" type="info"/>-->
    <!--        <br>-->
    <!--        <p style="margin-left: 10px">3</p>-->
    <!--      </a-card>-->
    <!--    </div>-->
  </div>
</template>

<script>

export default {
  name: "FriendPage",
  props: ['menuTheme', 'bgcount'],
  setup() {
    return {}
  }

}
</script>

<style scoped>

</style>