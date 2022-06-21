// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "./store/store";
// 引入 axios
import axios from 'axios'

// 挂载一个自定义属性$http
Vue.prototype.$http = axios
// 全局配置axios请求根路径(axios.默认配置.请求根路径)
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 引入echarts
// import * as echarts from 'echarts'
// Vue.prototype.$echarts = echarts


Vue.use(ElementUI);

Vue.config.productionTip = false
import loading from './components/loading'
Vue.use(loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
