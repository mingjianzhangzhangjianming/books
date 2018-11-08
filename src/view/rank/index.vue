<template>
  <div class="cont">
    <scroll class="scroll-con">
      <div class="scroll-content">
        <div class="contant">
          <div class="con-name">
            <p>男生</p>
          </div>
          <div class="rank-con" v-for="item in man" @click="intop(item._id)">
            <img :src="item.cover | img_url " alt="">
            <div class="line">
              <p>{{item.title}}</p>
            </div>
          </div>
          <div class="other-con">
            <img src="@/assets/img/sheng.png" alt="">
            <div class="line">
              <div class="line">
                <p>别人家的排行榜</p>
              </div>
            </div>
          </div>
          <div class="other" v-for="itemom in otherman" @click="intop(itemom._id)">
            <div class="line">
              <p>{{itemom.title}}</p>
            </div>
          </div>
        </div>

        <div class="contant">
          <div class="con-name">
            <p>女生</p>
          </div>
          <div class="rank-con" v-for="itemwo in woman" @click="intop(itemwo._id)">
            <img :src="itemwo.cover | img_url" alt="">
            <div class="line">
                <p>{{itemwo.title}}</p>
            </div>
          </div>
          <div class="other-con">
            <img src="@/assets/img/sheng.png" alt="">
            <div class="">
              <div class="line">
                <p>别人家的排行榜</p>
              </div>
            </div>
          </div>
          <div class="other" v-for="itemow in otherwoman" @click="intop(itemow._id)">
            <div class="line">
              <p>{{itemow.title}}</p>
            </div>
          </div>
        </div>
      </div>
    </scroll>
    <router-view></router-view>
    <!-- 路由 -->
  </div>
</template>
<!-- <img src="http://statics.zhuishushenqi.com/ranking-cover/142319144267827"> -->
<script>
import axios from 'axios'
import Scroll from '@/components/scroll'
export default {
  created(){
    axios.get('/api/ranking/gender').then(res =>{
      console.log(res.data)
      this.man = res.data.female.slice(0,7)
      this.woman = res.data.male.slice(0,7)
      this.otherman = res.data.female.slice(7)
      this.otherwoman = res.data.male.slice(7)
      this.mtitle = res.data.female.title
      console.log(this.man[0].title)
    })
  },
  data(){
    return{
      man:[],
      woman:[],
      otherman:[],
      otherwoman:[],
      img:"http://statics.zhuishushenqi.com/ranking-cover/142319217152210",
      lis:'',
      title:'',
    }
  },
  filters:{
    img_url:function(value){
      return 'http://statics.zhuishushenqi.com' + value
    }
  },
  methods:{
    intop(id){
      this.$router.push(`/rank/${id}/`)
    }
  },
  computed:{
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
    .cont{
      width:100%;
      .scroll-con{
        height:585px;
        overflow:hidden;
        .scroll-content{
          .contant{
            width:100%;
            .con-name{
              width:100%;
              height:36px;
              color:#c62f2f;
              font-size:16px;
              background:#e14b7c;
              >p{
                margin-left:20px;
                line-height:36px;
              }
            }
            .rank-con{
              display:flex;
              height:50px;
              align-items: center;
              >img{
                height:36px;
              }
              .line{
                width:100%;
                height:50px;
                line-height:50px;
                margin-left: 10px;
                border-bottom:1px solid #D0D0D0;
                p{
                  font-size: 18px;
                  color:#555050;
                }
              }
            }
            .other-con{
              width:100%;
              height:50px;
              display: flex;
              align-items: center;
              >img{
                height:36px;
              }
              .line{
                width:100%;
                height:50px;
                line-height: 50px;
                margin-left: 10px;
                border-bottom:1px solid #D0D0D0;
                p{
                  font-size: 18px;
                  color:#555050;
                }
              }
            }
            .other{
              width:100%;
              height:50px;
              .line{
                width:90%;
                margin-left: 46px;
                height:50px;
                line-height: 50px;
                border-bottom:1px solid #D0D0D0;
                p{
                  line-height: 50px;
                  font-size: 18px;
                  color:#555050;
                }
              }
            }
          }
        }
      }
    }
</style>
