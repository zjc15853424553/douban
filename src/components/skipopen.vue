<template>
    <div>
      <div class="header">
        <span @click="close()">关闭</span>
        <form action="">
          <input type="text">
        </form>
      </div>
      <ul>
        <li class="left">
          <div>
            <a href="#">
              <strong>电影</strong>
              <span>影院热映</span>
            </a>
            <a href="#">
              <strong>同城</strong>
              <span>周末活动</span>
            </a>
            <a href="#">
              <strong>阅读</strong>
              <span>电子书</span>
            </a>
            <a href="#">
              <strong>东西</strong>
              <span>心爱之物</span>
            </a>
          </div>
         </li>
        <li class="center">
          <div>
            <a href="#">
              <strong>电视</strong>
              <span>正在热播</span>
            </a>
            <a href="#">
              <strong>小组</strong>
              <span>志邀相投</span>
            </a>
            <a href="#">
              <strong>游戏</strong>
              <span>虚拟世界</span>
            </a>
            <a href="#">
              <strong>FM</strong>
              <span>红心歌单</span>
            </a>
          </div>
        </li>
        <li class="right">
          <div>
            <a href="#">
              <strong>图书</strong>
              <span>畅销排行</span>
            </a>
            <a href="#">
              <strong>音乐</strong>
              <span>新碟榜</span>
            </a>
            <a href="#">
              <strong>应用</strong>
              <span>玩手机</span>
            </a>
            <a href="#">
              <strong>市集</strong>
              <span>购买原创</span>
            </a>
          </div>
        </li>
      </ul>
      <div class="last">
        <div>
          <a href="#">注册账号</a>
          <a href="#">登录豆瓣</a>
        </div>
        <div>
          <a href="#">使用桌面版</a>
          <a href="#">使用豆瓣app</a>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "skipopen",
      methods:{
          close(){
            this.$router.push({
              path:'/',
            })
          }
      }
    }
</script>

<style scoped>
@import url('../assets/skipopen.css');
</style>
