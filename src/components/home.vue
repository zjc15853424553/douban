<template>
  <div>
    <div class="navTop">
      <h1>
        <a href="#">
          <img src="../assets/log.png" alt="">
        </a>
      </h1>
      <ul>
        <li><router-link to="film">电影</router-link></li>
        <li><router-link to="book">图书</router-link></li>
        <li><router-link to="broadcast">广播</router-link></li>
        <li><router-link to="group">小组</router-link></li>
      </ul>
      <span @click="open()"><img src="../assets/pic.png" alt=""></span>
    </div>
    <router-view></router-view>
  </div>


</template>

<script>
    export default {
        name: "home",
      methods:{
          open(){
            this.$router.push({
              path:'/skipopen',
            })
          }
      }
    }
</script>

<style scoped>
.navTop{
  width: 3.33rem;
  height:0.38rem;
  background: #fff;
  position: fixed;
  z-index: 999;
  top: 0;
  left:0;
  right: 0;
  padding: 0.1rem 0.21rem;
  border-bottom: .1rem solid #f3f3f3;
}
.navTop h1{
  display: inline-block;
  float: left;
  margin-right: 0.216rem;
}
.navTop h1 a{
  display: block;
  width: 0.55rem;
  height: 0.38rem;
  font: 0.38rem/0.38rem '微软雅黑';
}
.navTop h1 a img{
  width: 0.55rem;
  height: 0.38rem;
  display: block;
}
  .navTop ul {
    width: 2rem;
    height: 0.18rem;
    /*background: yellow;*/
    float: left;
    margin: 0.1rem ;
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }
.navTop ul li{
  margin-right: 0.14rem;
  text-align: center;
  font-size: 0.16rem;
}
.navTop ul li:nth-child(1) a{
   color: rgb(35, 132, 232);
 }
.navTop ul li:nth-child(2) a{
  color: rgb(159, 120, 96);
}
.navTop ul li:nth-child(3) a{
  color: rgb(228, 168, 19);
}
.navTop ul li:nth-child(4) a{
  color: rgb(42, 184, 204);
}
  .navTop span{
    display: block;
    float: left;
    margin: 0.1rem 0;
    width: 0.28rem;
    height: 0.21rem;
    /*background: pink;*/
  }
.navTop span img{
  width: 0.28rem;
  height: 0.21rem;
}
</style>
