import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import result from "../pages/result";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/result',
      name: 'result',
      component: result
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
