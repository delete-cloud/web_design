<template>
  <div>
    <div style=" padding: 30px">
      <a-card hoverable title="搭建网站过程及体会" :head-style="{color:(menuTheme === 'light'?'#001529':'#bdc3c7')}"
              bordered=false
              :style="{width:'auto',background: (menuTheme === 'light'?'#fff':'#2c3e50'), color:(menuTheme === 'light'?'#2c3e50':'#bdc3c7')}"
              @click="$router.replace('/blog/doc/docone')">
        <template #extra><a :style="{color:(menuTheme === 'light'?'#1da57a':'#0063c0') }"
                            @click="$router.replace('/' + $store.state.bgcount)">Home</a></template>
        <a-alert message="记录本次静态网页作业的过程及从中得到的体会" type="info"/>
        <br>
        <a-tag color="#f50">Vue</a-tag>
        <a-tag color="#2db7f5">前端</a-tag>
      </a-card>
    </div>
  </div>
</template>

<script>

export default {
  name: "DocPage",
  props: ['menuTheme', 'bgcount'],
  setup() {
    return {}
  }

}
</script>

<style scoped>

</style>