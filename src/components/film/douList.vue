<template>
  <div class="dl-wrap">
    <div class="dl-header">
      <h1>同时入选IMDB250和豆瓣电影250的电影</h1>
      <p class="dl-author"><span>东方快车</span></p>
    </div>
    <div class="dl-intro">
      <p>同时入选IMDB250和豆瓣电影250的电影</p>
      <p>2018年11月29日更新</p>
      <span v-if="!flag" class="dl-more" @click="flag=!flag"> . . . <a href="#">展开</a></span>
      <div v-if="flag">
        <p>感谢影迷朋友对这个豆列的支持，已经有超过200000人关注了，根据IMDB250和豆瓣电影250最新排名进行更新，并增加了其他只进入IMDBtop100或豆瓣电影top100的影片，希望大家继续支持。</p>
        <p>超过3 部电影入选的导演统计：</p>
        <p>克里斯托弗·诺兰 （6部）：同时入选IMDB250和豆瓣电影250的电影 盗梦空间 蝙蝠侠：黑暗骑士 蝙蝠侠：黑暗骑士崛起 星际穿越 致命魔术 记忆碎片</p>
      </div>
      <div class="like"><span class="dl-like"><img src="../../assets/ic_liked@2x.png" alt="">22164</span><span
        class="report">...</span></div>
    </div>
    <div class="dl-movie">
      <ul>
        <li v-for="(item,index) in arr">
          <div class="line"></div>
          <a href="#" class="movie-detail">
            <img :src="item.images.large" alt="">
            <div>
              <h2></h2>
              <div class="average">
                <div class="stars-wrap" v-if="item.rating.average > 0">
                  <span class="stars"></span>
                  <span class="stars"></span>
                  <span class="stars"></span>
                  <span :class="item.rating.average>6&&item.rating.average<8?'half-stars':'stars'"></span>
                  <span :class="item.rating.average>8?'half-stars':'no-stars'"></span>
                </div>
                <span>{{item.rating.average==0?"暂无评分":item.rating.average}}</span>
              </div>
              <p class="meta">
                <span v-for="ite in arr[index].casts">{{ite.name}}/</span>
                <span v-for="ite in arr[index].genres">{{ite}}/</span>
                <span v-for="ite in arr[index].pubdates">{{ite}}/</span>
              </p>
            </div>
          </a>
          <div class="dl-comment">评语：<p>
            同时进入IMDBtop10和豆瓣电影top10的电影：
            豆瓣电影250NO.1 IMDB250NO.1
          </p></div>
        </li>
      </ul>
    </div>
    <div class="tag">
      <h3>查看更多豆列</h3>
      <a href="#">电影</a>
      <a href="#">纪录片</a>
      <a href="#">奥斯卡</a>
      <a href="#">影人</a>
      <a href="#">电影截图</a>
    </div>
    <div class="page">
      <span>- {{i}} -</span>
      <a href="#" class="prev" @click="prev" :style=" i==1?'color: #ccc':'color: #494949'">上页</a><a href="#" class="next"  @click="next">下页</a>
    </div>
  </div>
</template>

<script>

    export default {
        name: "douList",
        data() {
            return {
                flag: false,
                arr: '',
                i:1
            }
        },
        mounted() {
             this.$http({url: `https://douban.uieee.com/v2/movie/top250?start=0&count=10`}).then(
                 res => {
                     this.arr = res.data.subjects
                     console.log(this.arr)
                 }
             )
        },
        watch:{

        },
        methods:{
            prev(){
                if (this.i==1){
                    this.i=1
                }else {
                    this.i=this.i-1
                    this.$http({url: `https://douban.uieee.com/v2/movie/top250?start=0&count=${this.i*10}`}).then(
                        res => {
                            this.arr = res.data.subjects.slice(this.i*10-10,this.i*10)
                        }
                    )
                }
            },
            next(){
                this.i=this.i+1;
                this.$http({url: `https://douban.uieee.com/v2/movie/top250?start=0&count=${this.i*10}`}).then(
                    res => {
                        this.arr = res.data.subjects.slice(this.i*10-10,this.i*10)
                    }
                )
            }
        }
    }
</script>

<style scoped>
  .dl-wrap{margin: 0 .18rem}
  .dl-header{
    margin: .3rem .22rem 0;
  }
  .dl-header>h1{
    font-size: .24rem;
    font-weight: 500;
    text-align: center;
    color: #494949;
    margin: .3rem 0 .15rem;
    line-height: .32rem;
  }
  .dl-author{
    text-align: center;
    margin-bottom: .15rem;
  }
  .dl-author>span{
    color: #494949;
    font-size: .15rem;
    display: inline-block;
    vertical-align: middle;
  }
  .dl-intro p{
    text-align: center;
    font-size:.12rem;
    margin: 0 .22rem 0;
    line-height: .16rem;
    color: #494949;
  }
  .dl-more{
    text-align: center;
    display: block;
    margin: 0 auto;

    font-size: .12rem;
  }
  .dl-more>a{
    color: #42BD56;
  }
  .like{
    margin: .2rem auto .25rem;
    padding-left: 32%;
  }
  .dl-like{
    display:inline-block ;
    width: 1.11rem;
    height: .32rem;
    line-height: .32rem;
    text-align: center;
    border-radius: .05rem;
    border: solid .01rem #42bd56;
    background-color: #ffffff;
    color: #42bd56;
  }
  .dl-like>img{
    padding-right: .07rem;
    width: .16rem;
    height: .15rem;
    vertical-align: middle;
  }
  .report{
    display: inline-block;
    width: .32rem;
    height: .32rem;
    line-height: .32rem;
    text-align: center;
    border-radius: .05rem;
    border: solid .01rem #42bd56;
    margin-left: .08rem;
  }
  .movie-detail{
    display: block;
    overflow: hidden;
  }
  .dl-movie li{
    position: relative;
    padding:.2rem .18rem .2rem 0;
  }
  .line{
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background: #e5e5e5;
    content: '';
    position: absolute;
  }
  .movie-detail>img{
    float: left;
    width: .75rem;
    height: auto;
    margin-right: .15rem;
  }
  .dl-comment{
    margin: .1rem 0 0 .06rem;
    padding: 0 8px;
    font-size: .12rem;
    line-height: 1.5;
    border-left: .02rem solid #e5e5e5;
    color: #494949;
  }

  .meta{
    color: #aaaaaa;
    font-size: .12rem;
    line-height: .16rem;
  }
  .tag a{
    font-size: 15px;
    line-height: 28px;
    padding: 0 12px;
    border-radius: 28px;
    text-align: center;
    color: #494949;
    background: #f5f5f5;
    display: inline-block;
    margin: .1rem .1rem 0 0;
  }
  .page{
    margin: .16rem 0;
    width: 100%;
    height: .18rem;
    font-size: .18rem;
    text-align: center;
  }
  .page>span{
    display: block;
  }
  .page>a{
    font-size: .18rem;
    width: 45%;
    height: .35rem;
    line-height: 2;
    display: inline-block;
    padding:.01rem;
    background-color: #F2F2F2;
    color: #494949;
    margin-top: .2rem;
    margin-left: 2%;
    border: .01rem solid #ccc;
    border-radius: 4px;
    text-align: center;
    vertical-align: middle;
  }
</style>
