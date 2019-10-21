<template>
    <div class="bigBox">
      <div class="bigName"><h2>影院热映</h2><a href="#">更多</a></div>
      <div class="bigMain">
        <ul>
          <li v-for="item in arr" @click="details(item.id)">
            <img :src="item.images.large" alt="">
            <span>{{item.title}}</span>
            <p>
              <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" track-by="index"></span>

              <em>{{item.rating.average}}</em>
            </p>
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
          arr:[],
            score:5.5
          }
      },
        computed:{ //计算属性
                itemClasses(){
        let result = [];
                  let score = Math.floor(this.score * 2 ) / 2;
                  let hasDecimal = score % 1 !== 0;
      let integer = Math.floor(score);
      for(let i=0;i<integer;i++){
                        result.push("active");
      }
                  if(hasDecimal){
                        result.push("active1");
                  }
                  while(result.length < 5){
                       result.push("active2");
                  }
      return result;
    }
    },
      methods:{
          details(x){
            this.$router.push({
              path:'/Moviedetails',
              query:{obj:x}
            })
          }
      },
      mounted() {
          this.$http({
            url:'https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10'
          }).then((res)=>{
            console.log(res.data.subjects)
            console.log(res.data.subjects)
            this.arr = res.data.subjects.splice(0,8)
          });

      }
    }
</script>

<style scoped>
  .bigMain ul li p span{
    display: inline-block;
    width: 0.13rem;
    height: 0.13rem;
    margin: 0;
    background-size: 0.13rem 0.13rem;
  }
  .bigMain ul li p span{
    display: inline-block;
    width: 0.13rem;
    height: 0.13rem;
    background-size: 0.13rem 0.13rem;
  }
  .star-item .active{
    background: url("../../assets/xing.png") no-repeat;
    background-size: 0.13rem 0.13rem;
  }
  .star-item .active1{
    background: url("../../assets/xing1.png") no-repeat;
    background-size: 0.13rem 0.13rem;
  }
  .star-item .active2{
    background: url("../../assets/xing2.png") no-repeat;
    background-size: 0.13rem 0.13rem;
  }
</style>
