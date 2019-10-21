<template>
    <div>
      <received></received>
      <free></free>
      <newMovie></newMovie>
      <find></find>
      <classify></classify>
      <last></last>
    </div>
</template>

<script>
  import received from  "./film/received"
  import free from  "./film/free"
  import newMovie from  "./film/newMovie"
  import find from  "./film/find"
  import classify from  "./film/classify"
  import last from  "./film/last"
    export default {
        name: "film",
      components:{
        received,
        free,
        newMovie,
        find,
        classify,
        last
      }
    }
</script>

<style scoped>

</style>
