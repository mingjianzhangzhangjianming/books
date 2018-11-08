<template>
  <div class="top">
    <div class="top-header">
      <img src="@/assets/img/fanhuiass.png" alt="" class="left" @click="back"></img>
      <span @click="back">返回</span>
      <p>{{title}}</p>
      <img src="@/assets/img/zhuye.png" alt="" class="right">
    </div>
    <div class="conrank">
      <span @click="onweek">周榜</span>
      <span @click="onmoon">月榜</span>
      <span @click="onallover">总榜</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:'',
    }
  },
  methods:{
    back(){
      this.$router.back()
    },
    onweek(){

    },
    onmoon(){

    },
    onallover(){

    }
  }
}
</script>

<style lang="less" scoped>
*{
  margin:0;
  padding:0;
}
.top{
  width:100%;
  height:100px;
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
  .conrank{
    width:100%;
    height:60px;
    display:flex;
    align-items:center;
    justify-content:center;
    span{
      width:33.3%;
      height:60px;
      text-align:center;
      line-height:60px;
      font-size:18px;
      color:#8c8686;
      text-decoration:none;
    }
  }
}
</style>
