import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '../First'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      
      component:First
    }
  ]
})
