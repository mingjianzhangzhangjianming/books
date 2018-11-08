import Vue from 'vue'
import Router from 'vue-router'
import Selected from '@/view/selected'
import Vip from '@/view/vip'
import Classify from '@/view/classify'
import Rank from '@/view/rank'
import Conran from '@/view/rank/conran.vue'
import Detail from '@/view/rank/detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:to=>{
        return '/selected';
      }
    },
    {
      path: '/selected',
      component: Selected
    },
    {
      path:'/vip',
      component: Vip
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path:'/rank',
      component: Rank,
      children:[
        {
          path:'/rank/:id',
          component:Conran,
          children:[
            {
              path:'/detail/:id',
              component:Detail,
            }
          ]
        }
      ]
    }
  ]
})
