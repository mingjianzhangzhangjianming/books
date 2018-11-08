<template>
  <div id="app">
    <!-- 头部 -->
    <headerCon></headerCon>
    <router-view/>
  </div>
</template>

<script>
import HeaderCon from '@/components/headerCon.vue'
export default {
  name: 'App',
  components:{
    HeaderCon,
  }
}
</script>

<style lang="less">
  *{
    margin:0;
    padding:0;
  }
</style>
