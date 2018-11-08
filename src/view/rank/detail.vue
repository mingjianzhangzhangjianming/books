<template>
  <div class="detail">
    <!-- 头部 -->
    <div class="top-header">
      <img src="@/assets/img/fanhuiass.png" alt="" class="left" @click="back"></img>
      <span @click="back">返回</span>
      <p>书籍详情</p>
      <img src="@/assets/img/zhuye.png" alt="" class="right">
    </div>
    <!-- 书籍详情 -->
    <div class="deta-top">
      <!-- 书本信息 -->
      <div class="book-con">
        <div class="image">
          <img src="@/assets/img/sheng.png" alt="">
        </div>
        <div class="book-detail">
          <ul>
            <li class="title">牧神记</li>
            <li class="del"><span>宅猪    |</span><p>东方玄幻    |</p><p>371万字</p></li>
            <li>4小时前更新</li>
          </ul>
        </div>
      </div>
      <!-- 阅读和加入书架 -->
      <div class="install">
        <span class="join">加入书架</span>
        <span class="read">开始阅读</span>
      </div>

    </div>
    <!-- 小说热度 -->

    <div class="hot">

      <div class="hot-nav">
        <p>追人气</p>
        <span>9.3万</span>
      </div>

      <div class="hot-nav">
        <p>读者存留率</p>
        <span>75.77%</span>
      </div>

      <div class="hot-nav">
        <p>日更字数/天</p>
        <span>8207</span>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created(){
    let id = this.$router.params.id;
    console.log(id)
    axios.get('/api/book/${id}').then(res =>{
      console.log(1)
    })
  }
}
</script>

<style lang="less" scoped>
*{
  margin:0;
  padding:0;
}
.detail{
  position:fixed;
  width:100%;
  top:0;
  bottom:0;
  background:#fff;
  .top-header{
    height:40px;
    background:#C62F2F;
    display:flex;
    align-items:center;
    .left{
      flex:1;
      width:28px;
      padding-left:10px;
    }
    span{
      flex:1;
      height:40px;
      font-size:15px;
      text-align:center;
      line-height:40px;
      color:#FFF;
    }
    p{
      flex:8;
      text-align:center;
      font-size:24px;
      color:#fff;
      line-height:40px;
    }
    .right{
      width:28px;
      flex:1;
      padding-right:18px;
    }
  }
  .deta-top{
    width:100%;
    .book-con{
      width:100%;
      height:150px;
      display:flex;
      .image{
        width:120px;
        img{
          width:90px;
          margin-top:10px;
          padding-left:10px;
        }
      }
      .book-detail{
        flex:1;
        ul{
          list-style:none;
          display:flex;
          flex-direction:column;
          justify-content:center;
          padding-top:10px;
          li{
            height:36px;
            line-height:36px;
            font-size:16px;
            color:#d0d0d0;
          }
          .title{
            font-size:24px;
            color:#000;
          }
          .del{
            display:flex;
            span{
              font-size:16px;
              color:#f00;
            }
            p{
              font-size:16px;
              color:#d0d0d0;
              margin-left:15px;
            }
          }
        }
      }
    }
    .install{
      width:100%;
      height:68px;
      display:flex;
      justify-content:center;
      span{
        width:120px;
        height:48px;
        font-size:20px;
        line-height:48px;
        text-align:center;
      }
      .join{
        color:#b21313;
        border:1px solid #b21313;
        margin-right:25px;
      }
      .read{
        color:#fff;
        background:#a72d2d;
        margin-left:25px;
      }
    }
  }
  .hot{
    width:100%;
  }
}
</style>
