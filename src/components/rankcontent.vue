<template>
  <div class="list">
    <scroll class="weekrank">
      <div class="week">
        <div class="conweek" v-for="item in wenk" @click="detail(item._id)">
          <img :src="item.cover | img_url" alt="">
          <div class="title">
            <ul>
              <li class="bookname">{{item.title}}</li>
              <li class="bookuser">{{item.author}}</li>
              <li class="booktitle">{{item.shortIntro}}</li>
              <li class="bookhot"><span>{{(item.latelyFollower/10000).toFixed(1)}}万人气</span>|<p>{{item.retentionRatio}}%读者存留</p></li>
            </ul>
          </div>
        </div>
      </div>
    </scroll>
    <router-view></router-view>
    <!-- 小说详情路由 -->
  </div>
</template>

<script>
import Scroll from '@/components/scroll'
export default {
  props:{
    wenk:{
      type:Object,
      default:{}
    },
  },
  filters:{
    img_url:function(val){
      return 'http://statics.zhuishushenqi.com' + val
    }
  },
  components:{
    Scroll
  },
  methods:{
     detail(id){
       this.$router.push(`/detail/${id}`)
     },
  }
}
</script>

<style lang="less" scoped>
*{
  margin:0;
  padding:0;
}
.list{
  .weekrank{
    height:585px;
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
            }
          }
        }
      }
    }
  }
}
</style>
