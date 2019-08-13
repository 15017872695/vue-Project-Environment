import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import config from './config/index';// 路径配置
import 'element-ui/lib/theme-chalk/index.css';//ElementUI样式表
import element from '../babel-plugin-component';
Vue.use(element)
config.baseURL;  // 对应环境api
Vue.config.productionTip = false;

// 全局路由守卫(全局控制登录)
// router.beforeEach((to, from, next) => {
//   var isToken = window.localStorage.getItem('token')
//   console.log(window.localStorage.getItem('token'))
//   if(isToken != '' && isToken != null){
//     next();
//   }else{
//     next('/login')
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
