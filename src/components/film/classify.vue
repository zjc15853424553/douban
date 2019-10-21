<template>
    <div class="ify">
      <h2>分类浏览</h2>
      <ul>
        <li><a href="#">经典</a><span></span></li>
        <li><a href="#">冷门佳片</a><span></span></li>
        <li><a href="#">豆瓣高分</a><span></span></li>
        <li><a href="#">动作</a><span></span></li>
        <li><a href="#">喜剧</a><span></span></li>
        <li><a href="#">爱情</a><span></span></li>
        <li><a href="#">悬疑</a><span></span></li>
        <li><a href="#">恐怖</a><span></span></li>
        <li><a href="#">科幻</a><span></span></li>
        <li><a href="#">治愈</a><span></span></li>
        <li><a href="#">文艺</a><span></span></li>
        <li><a href="#">成长</a><span></span></li>
        <li><a href="#">动画</a><span></span></li>
        <li><a href="#">花语</a><span></span></li>
        <li><a href="#">欧美</a><span></span></li>
        <li><a href="#">韩国</a><span></span></li>
        <li><a href="#">日本</a><span></span></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "classify"
    }
</script>

<style scoped>
.ify h2{
  height: 0.26rem;
  padding: 0 0.16rem;
  font: 0.16rem/0.26rem '微软雅黑';
}
.ify ul{
  margin: 0.16rem 0 0 0.16rem;
  overflow: hidden;
}
  .ify ul li{
    float: left;
    box-sizing: border-box;
    width: 50%;
    padding-right: 0.18rem;
    height: 0.42rem;
    line-height: 0.42rem;
    font-size: 0.16rem;
    border-top: .01rem solid #eee;
    border-right: .01rem solid #eee;
  }
.ify ul li a{
  color: #42bd56;
}
.ify ul li span{
  color: #ccc;
  float: right;
  font-weight: 700;
  display: inline-block;
  border-right: .01rem solid #ccc;
  border-bottom: .01rem solid #ccc;
  width: .08rem;
  height: .08rem;
  transform: rotate(-45deg);
  margin-top: 0.1rem;
}
</style>
