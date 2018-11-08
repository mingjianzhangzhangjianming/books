<template>
  <div class="all">
    <scroll class="text-scroll">
      <div class="contant">

        <div class="con-name">
          <div class="classnon">
            <p class="text-name">男生</p>
          </div>
          <div class="tent">
            <div class="book-name" v-for="itemd in down">
              <p>{{itemd.name}}</p>
              <span>{{itemd.bookCount}}</span>
            </div>
          </div>
        </div>

        <div class="con-name">
          <div class="classnon">
            <p class="text-name">女生</p>
          </div>
          <div class="tent">
            <div class="book-name" v-for="itemd in down">
              <p>{{itemd.name}}</p>
              <span>{{itemd.bookCount}}</span>
            </div>
          </div>
        </div>

        <div class="con-name">
          <div class="classnon">
            <p class="text-name">漫画</p>
          </div>
          <div class="tent">
            <div class="book-name" v-for="itemd in down">
              <p>{{itemd.name}}</p>
              <span>{{itemd.bookCount}}</span>
            </div>
          </div>
        </div>

        <div class="con-name">
          <div class="classnon">
            <p class="text-name">出版</p>
          </div>
          <div class="tent">
            <div class="book-name" v-for="itemd in down">
              <p>{{itemd.name}}</p>
              <span>{{itemd.bookCount}}</span>
            </div>
          </div>
        </div>

      </div>
    </scroll>
  </div>
</template>

<script>
import axios from 'axios'
import Scroll from '@/components/scroll'
export default {
  created(){
      axios.get('/api/cats/lv2/statistics').then(res=>{
        console.log(res.data)
        this.name = res.data.male
        this.user = res.data.female
        this.show = res.data.picture
        this.down = res.data.press
      })
  },
  data(){
    return {
      name:[],
      user:[],
      show:[],
      down:[],
    }
  },
  methods:{
  },
  components:{
    Scroll
  }
}
</script>

<style lang="less" scoped>
*{
  margin:0;
  padding:0;
}
.all{
  .text-scroll{
    height:585px;
    overflow:hidden;
    .contant{
      width:100%;
      .con-name{
        width:100%;
        .classnon{
          width:100%;
          height:50px;
          font-size:16px;
          color:#7e766f;
          font-weight:bold;
          .text-name{
            margin-left:20px;
            line-height:50px;
          }
        }
        .tent{
          width:100%;
          display:flex;
          flex-wrap:wrap;
          .book-name{
            width:32.6%;
            height:60px;
            border:1px solid #e0e0e0;
            display: flex;
            flex-direction: column;
            align-items:center;
            justify-content: center;
            p{
              font-size:18px;
              color:#000;
              font-weight:bold;
            }
            span{
              font-size:15px;
              color:#888;
            }
          }
        }
      }
    }
  }
}
</style>
