<template>
  <div>
    <div id=view></div>
    <div id=scene_top>
      <h1 style="color: white">Mikutap</h1>
      <div id=ng>
        <p class=atten>十分抱歉<br>您的浏览器并不支持本页面需要的特性</p>
      </div>
      <div class=ok>
        <p id=bt_start>
          <a>!开始!</a>
        </p>
      </div>
      <p id=bt_about>
        <a>*关于*</a>
      </p>
      <div class=ok>
        <p class=attention>※打开声音，然后享受音乐吧</p>
      </div>
    </div>
    <div id=scene_loading>
      <hr size=1 color=#fff>
    </div>
    <div id=scene_main>
      <div class=set>
        <p class=attention>点击 &amp; 拖动或者按任意键!</p>
        <p id=bt_feedback>
          <a href="">反馈: 开启</a>
        </p>
        <p id=bt_backtrack>
          <a href="">背景音乐: 开启</a>
        </p>
      </div>
    </div>
    <div id=about_cover></div>
    <div id=about>
      <div id=about_in>
        <p class="close"><span id="bt_close">×</span></p>
        <p class="con"> 声音来源 <a href="https://ec.crypton.co.jp/pages/prod/vocaloid/mikuv4x" target="_blank">Hatsune
          Miku</a></p>
        <p class="con"> 作者 <a href="https://aidn.jp" target="_blank">daniwell</a> (<a
            href="https://twitter.com/daniwell_aidn" target="_blank">twitter</a>) </p>
        <p class="link"> 灵感来源 <a href="http://patatap.com/" target="_blank">Patatap</a><br>(令人赞叹的网页!)</p>
      </div>
    </div>
    <div id=bt_back>＜</div>
    <div id="bt_fs">□全屏显示</div>
  </div>
</template>

<script>
// 相关依赖
import {mikutap} from '@/js/mikutap'

export default {
  setup() {
    return {}
  },
  mounted() {
    mikutap()
  }
}
</script>

<style scoped>
@import "@/css/common.css";
@import "@/css/mikutap.css";
</style>