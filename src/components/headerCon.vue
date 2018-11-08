<template>
  <div class="top">
    <p>追书神器</p><img src="../assets/img/sousuo.png">
    <div class="top-con">
      <router-link to="/selected">精选</router-link>
      <router-link to="/vip">VIP</router-link>
      <router-link to="/classify">分类</router-link>
      <router-link to="/rank">排行</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name:'Header'
}
</script>

<style lang="less" scoped>
 *{
   margin:0;
   padding:0;
   .top{
     width:100%;
     height:105px;
     display:inline-block;
     >p{
       text-align:center;
       font-size:28px;
       color:#f00;
       font-weight:bold;
     }
     img{
       position:absolute;
       top:10px;
       right:25px;
       width:35px;
     }
     .top-con{
       width:100%;
       height:68px;
       background:#C62F2F;
       display:flex;
       align-items:center;
       a{
         width:100px;
         height:30px;
         color:#d4c0c0;
         font-size:18px;
         line-height:30px;
         text-align:center;
         text-decoration:none;
         border-right:1px solid #666;
       }
       a:hover{
         color:#fff;
       }
     }
   }
 }
</style>
