<template>
    <div class="last">
      <div class="pic">
        <img src="../../assets/dou.png" alt="">
        <div>
        <strong>豆瓣</strong>
          <p>我们的精神角落</p>
        </div>

      </div>
      <a href="#">去 App Store 免费下载 iOS 客户端</a>
    </div>
</template>

<script>
    export default {
        name: "last"
    }
</script>

<style scoped>
.last{
  margin: 0.6rem 0 0.34rem;
  padding: 0 0 0.24rem;
  text-align: center;
  font-size: 0.16rem;
}
  .pic{
    width: 1.8rem;
    height: 0.57rem;
    margin: 0 auto;
  }
.pic img{
  display: block;
  float: left;
  width: 0.57rem;
  height: 0.57rem;
  margin: 0 0.08rem 0 0;
}
.pic div strong{
  font-size: 0.24rem;
}
.pic div p{
  margin: 0.1rem 0;
}
.last a{
  display: block;
  margin:0.18rem 0 0;
  color: #42bd56;;
}
</style>
