<template>
  <div class="col">
   <Rankheader :title="title"></Rankheader>
   <Rankcontent :wenk="wenk"></Rankcontent>
  </div>
</template>

<script>
import axios from 'axios'
import Rankheader from '@/components/rankHeader'
import Rankcontent from '@/components/rankcontent'
export default {
  data(){
    return{
      wenk:{},
      title:'',
    }
  },
  created(){
    let id = this.$route.params.id
    axios.get(`/api/ranking/${id}`).then(res =>{
      this.wenk = res.data.ranking.books
      this.title = res.data.ranking.title
      console.log(res.data)
    })
  },
  components:{
    Rankheader,
    Rankcontent,
  }
}
</script>

<style lang="less" scoped>
  .col{
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 0;
    z-index: 5;
    background: #fff;
  }
</style>
