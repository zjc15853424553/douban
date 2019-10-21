<template>
    <div>
        <div class="Movie">
          <h1>{{name}}</h1>
          <div class="mainBox">
            <div class="MovieLeft">
              <div><span></span><span>8.1</span><span>2021312人评价</span></div>
              <p>{{year}}/剧情 / <span v-for="item in casts">{{item.name}}/</span> <span v-for="item in directors">{{item.name}}/</span> <span v-for="item in countries">{{item}}</span></p>
              <a href="#">用App查看影人资料</a>
            </div>
            <div class="Movieright">
              <img :src="image.large" alt="">
            </div>
          </div>
          <div class="marking">
            <a href="#">想看</a>
            <a href="#">看过</a>
          </div>
          <div class="into">
            <h2>{{original}}的简介</h2>
            <p>
              {{mary}}
            </p>
          </div>
          <div class="genres">
            <h2>查看更多相关分类</h2>
            <ul>
              <li v-for="item in gen"><a href="#">{{item}}</a></li>
            </ul>
          </div>
          <div class="pic">
            <h2>{{name}}的图片</h2>
            <ul>
              <li v-for="item in image"><a href="#"><img :src="item" alt=""></a></li>
            </ul>
          </div>
        </div>
        <div class="comments">
        <h2>{{original}}的短评</h2>
          <div class="bigList">
            <div class="card" v-for="item in popular">
              <div class="cardTop">
                <a href="#"><img src="../../assets/doupic.png" alt=""></a>
                <a href="#">
                  <div class="carRight">
                    <strong>豆瓣</strong>
                    <div>2017-03-01 19:30:41</div>
                  </div>

                  </a>
              </div>
              <p>
                {{item.summary}}
              </p>
              <div class="cardBot">
                <span><img src="../../assets/ic_like_gray.svg" alt=""><i>4</i></span>
                <span>…</span>
              </div>
            </div>

          </div>
          <a class="thep" href="#">显示更多评论</a>
      </div>
        <div class="question">
          <h2>关于{{name}}的问答</h2>
          <div>
            <ul>
              <li>
                <h3>大家为什么对国产片这么苛刻？</h3>
                <p>35回答</p>
              </li>
              <li>
                <h3>大家为什么对国产片这么苛刻？</h3>
                <p>35回答</p>
              </li>
              <li>
                <h3>大家为什么对国产片这么苛刻？</h3>
                <p>35回答</p>
              </li>
              <li>
                <h3>大家为什么对国产片这么苛刻？</h3>
                <p>35回答</p>
              </li>
              <li>
                <h3>大家为什么对国产片这么苛刻？</h3>
                <p>35回答</p>
              </li>
            </ul>
          </div>
          <a href="#">显示更多问答</a>
        </div>
      <find></find>
      <last></last>
    </div>
</template>

<script>
  import last from './last'
  import find from './find'
    export default {
        name: "details",
      data(){
          return {
            num:this.$route.query.obj,
            str:[],
            name:'',
            gen:[],
            original:'',
            mary:'',
            image:[],
            casts:[],
            directors:[],
            countries:[],
            popular:[],
            year:''
          }
      },
      mounted() {
          this.$http({
            url:'https://douban.uieee.com/v2/movie/subject/'+this.num
          }).then((res)=>{
            console.log(res)
            this.str = res;
            this.name = res.data.title;
            this.gen = res.data.genres;
            this.original = res.data.original_title;
            this.mary = res.data.summary;
            this.image = res.data.images;
            this.casts = res.data.casts;
            this.directors = res.data.directors;
            this.countries = res.data.countries;
            this.popular = res.data.popular_reviews;
            this.year = res.data.year;
          })
      },
      components:{
          last,
        find
      }
    }
</script>

<style scoped>
@import  url('../../assets/Moviedetails.css');
</style>
