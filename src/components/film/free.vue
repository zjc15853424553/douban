<template>
    <div class="bigBox">
      <div class="bigName"><h2>免费在线观影</h2><a href="#">更多</a></div>
      <div class="bigMain">
        <ul>
          <li v-for="item in arr" @click="details(item.id)">
            <img :src="item.images.large" alt="">
            <span>{{item.title}}</span>
            <p><em>{{item.rating.average}}</em></p>
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
        details(x){
          this.$router.push({
            path:'/Moviedetails',
            query:{obj:x}
          })
        }
      },
      mounted() {
          this.$http({
            url:'https://douban.uieee.com/v2/movie/top250?start=0&count=10'
          }).then((res)=>{
            console.log(res.data.subjects)
            this.arr = res.data.subjects.splice(0,8)
          })
      }
    }
</script>

<style>

</style>
