<template>
    <div class="bigBox">
      <div class="findBox"><h2>发现好电影</h2><a href="#">更多</a></div>
      <div class="findMain">
        <ul>
          <li>
            <a href="#" @click="todouList()">同时入选IMDB250和豆瓣电影250的电影</a>
          </li>
          <li>
            <a href="#" @click="todouList()">带你进入不正常的世界</a>
          </li>
          <li>
            <a href="#" @click="todouList()">用电【影】来祭奠逝去的岁月</a>
          </li>
          <li>
            <a href="#" @click="todouList()">女孩们的故事【电影】</a>
          </li>
          <br>
          <li>
            <a href="#" @click="todouList()">科幻是未来的钥匙——科幻启示录【科幻题材】</a>
          </li>
          <li>
            <a href="#" @click="todouList()">美国生活面面观</a>
          </li>
          <li>
            <a href="#" @click="todouList()">2015终极期待</a>
          </li>
          <li>
            <a href="#" @click="todouList()">经典韩国电影——收集100部</a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "received",
      data(){
          return {
          arr:[]
          }
      },
      methods:{
        todouList(){
            this.$router.push({
              path:'/douList'
            })
          }
      }
    }
</script>

<style scoped>


  .bigBox .findBox{
    width: 3.37rem;
    height: 0.31rem;
    /*background: yellow;*/
    padding: 0 0.19rem;
  }
  .bigBox .findBox h2{
    display: inline-block;
    font: 0.16rem/0.31rem '微软雅黑';
  }
  .bigBox .findBox  a{
    display: inline-block;
    float: right;
    color: #42bd56;
    font: 0.14rem/0.31rem '微软雅黑';
  }

  .findMain ul{
    padding: 0.08rem 0;
    overflow-x: auto;
    white-space: nowrap;
    text-align: center;
  }
  .findMain ul li{
    display: inline-block;
    padding-left: 0.096rem;
    margin: 0 0 .08rem 0.16rem;
    font-size: 0.16rem;
    border: .01rem solid;
    border-radius: .04rem;
    vertical-align: middle;
    border-color: rgb(255, 172, 45);
  }
  .findMain ul li a{
    height: 0.5rem;
    line-height: 0.5rem;
    padding: 0 0.24rem;
    letter-spacing: .016rem;
    overflow: auto;
    display: block;
    text-align: center;
  }
  .findMain ul li:nth-child(1) a{
    color: rgb(255, 172, 45);
  }
  .findMain ul li:nth-child(2) a{
    color: rgb(255, 64, 85);
  }
  .findMain ul li:nth-child(3) a{
    color: rgb(79, 157, 237);
  }
  .findMain ul li:nth-child(4) a{
    color: rgb(255, 196, 108);
  }
  .findMain ul li:nth-child(5) a{
    color: rgb(35, 132, 232);
  }
  .findMain ul li:nth-child(6) a{
    color: rgb(59, 169, 77);
  }
  .findMain ul li:nth-child(7) a{
    color: rgb(66, 189, 86);
  }
  .findMain ul li:nth-child(8) a{
    color: rgb(204, 51, 68);
  }
</style>
