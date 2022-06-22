import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import result from "../pages/result";
import Draw from "../components/Draw";
import AtmState from "../pages/AtmState"
import AtmTran from "../pages/AtmTran";
import AtmCase from "../pages/AtmCase";
import web from "../pages/web";
import program from "../pages/program";
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
    },
    {
      path: '/AtmState',
      name: 'AtmState',
      component: AtmState
    },
    {
      path: '/AtmTran',
      name: 'AtmTran',
      component: AtmTran
    },
    {
      path: '/AtmCase',
      name: 'AtmCase',
      component: AtmCase
    },
    {
      path: '/program',
      name: 'program',
      component: program
    },
    {
      path: '/web',
      name: 'web',
      component: web
    },
    {
      path: '/test',
      name: 'test',
      component: Draw
    }
  ]
})
