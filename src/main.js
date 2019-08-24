import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import Router from 'vue-router'
import store from './store/index';
import config from './config/index';// 路径配置
import 'element-ui/lib/theme-chalk/index.css';//ElementUI样式表
import element from '../babel-plugin-component';
import wx from  'weixin-js-sdk';
import echarts from 'echarts';

Vue.use(element)

config.baseURL;  // 对应环境api

Vue.config.productionTip = false;

Vue.prototype.wx = wx;

Vue.prototype.$echarts = echarts;

Vue.use(echarts);


// 全局路由守卫(全局控制登录)
// router.beforeEach((to, from, next) => {
//   var isToken = localStorage.getItem('token')
//   console.log(localStorage.getItem('token'))
//   console.log(to)
//   if(isToken != '' && isToken != null){
//     next();
//   }else{
//     next({path:'/login'})
//   }
// })



// vue router 报错： Uncaught (in promise) NavigationDuplicated {_name:""NavigationDuplicated"... 的解决方法
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
