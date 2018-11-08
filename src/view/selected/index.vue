<template>
  <div class="select">
    <div class="swiper-container" id="cont">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="http://statics.zhuishushenqi.com/recommendPage/154055037141970" alt="">
        </div>
        <div class="swiper-slide">
           <img src="http://statics.zhuishushenqi.com/recommendPage/154055039895496" alt="">
        </div>
        <div class="swiper-slide">
           <img src="http://statics.zhuishushenqi.com/recommendPage/154055043727779" alt="">
        </div>
        <div class="swiper-slide">
          <img src="http://statics.zhuishushenqi.com/recommendPage/154055048009566" alt="">
        </div>
      </div>
    </div>
    <!-- 路由导航条 -->
    <div class="nav">
      <div class="nav-con">
        <router-link to=""><img src="@/assets/img/box.png" alt=""></router-link>
        <span>书架</span>
      </div>
      <div class="nav-con">
        <router-link to=""><img src="@/assets/img/bookname.png" alt=""></router-link>
        <span>书单</span>
      </div>
      <div class="nav-con">
        <router-link to=""><img src="@/assets/img/map.png" alt=""></router-link>
        <span>漫画</span>
      </div>
      <div class="nav-con">
        <router-link to=""><img src="@/assets/img/mythis.png" alt=""></router-link>
        <span>我的</span>
      </div>
    </div>
    <div class="line">
    </div>
    <!-- 分割条 -->
    <div class="sele-content">
      <div class="sele-con">
         <span>畅销短篇</span>
      </div>
      <div class="list">
        <scroll class="weekrank">
          <div class="week">
            <div class="conweek" v-for="item in list">
              <img :src="item.cover | img_url" alt="">
              <div class="title">
                <ul>
                  <li class="bookname">{{item.title}}</li>
                  <li class="booktitle">{{item.shortIntro}}</li>
                  <li class="bookuser">{{item.author}}</li>
                  <li class="bookhot"><span>{{(item.latelyFollower/10000).toFixed(1)}}万人气</span>|<p>{{item.minorCate}}</p><p  class=class-book>{{item.majorCate}}</p></li>
                </ul>
              </div>
            </div>
          </div>
        </scroll>
      </div>
    </div>
  </div>
    <!-- 内容区 -->
  </div>
</template>
<script>
import axios from 'axios'
import Scroll from '@/components/scroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data(){
    return {
      list:[],
    }
  },
  components:{
    Scroll
  },
  mounted(){
    let myswiper = new Swiper('#cont',{
      pagination:{
        el:'.swiper-pagination'
      },
      observeParents:true,
      observer:true,
    })
  },
  created(){
    axios.get('/api/ranking/548e97e29fb698a01dc6ee6f').then(res =>{
      this.list = res.data.ranking.books;
      console.log(this.list)
    })
  },
  filters:{
    img_url:function(val){
      return 'http://statics.zhuishushenqi.com' + val
    }
  },
}
</script>

<style lang="less" scoped>
*{
  margin:0;
  padding:0;
}
.select{
  width:100%;
  #cont{
    img{
      width:100%;
    }
  }
  .nav{
    width:100%;
    height:80px;
    align-items:center;
    justify-content:center;
    display:flex;
    .nav-con{
      width:25%;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      span{
        font-size:16px;
        color:#000;
      }
    }
  }
  .line{
    width:100%;
    height:18px;
    background:#f4f4f4;
  }
  .sele-content{
    width:100%;
    .sele-con{
      height:48px;
      span{
        line-height:48px;
        padding-left:18px;
        color:#000;
        font-size:18px;
      }
    }
    .list{
      .weekrank{
        height:260px;
        overflow:hidden;
        .week{
          width:100%;
          background:#f7efef;
          .conweek{
            width:100%;
            height:125px;
            display:flex;
            align-items:center;
            justify-content:center;
            >img{
              width:70px;
              padding:16px;
            }
            .title{
              height:125px;
              ul{
                list-style:none;
                display:flex;
                flex-direction:column;
                justify-content:center;
                height:125px;
                padding-left:10px;
                border-bottom:1px solid #ceb9b9;
                li{
                  height:28px;
                  line-height:28px;
                }
                .bookname{
                  font-size:20px;
                  font-weight:bold;
                }
                .bookuser{
                  font-size:15px;
                  color:#8c8686;
                }
                .booktitle{
                  font-size:15px;
                  color:#8c8686;
                  overflow: hidden; /*自动隐藏文字*/
                  text-overflow: ellipsis;/*文字隐藏后添加省略号*/
                  white-space: nowrap;/*强制不换行*/
                  width: 20em;/*不允许出现半汉字截断*/
                }
                .bookhot{
                  font-size:16px;
                  display:flex;
                  color:#dd3c5a;
                  span{
                    margin-right:10px;
                  }
                  p{
                    margin-left:10px;
                  }
                  .class-book{
                    border:1px solid #abe226;
                    text-align:center;
                    color:#abe226;
                    font-size:16px;
                    position:absolute;
                    right:12px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
