import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import config from './config/index';// 路径配置
import ElementUI  from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';//ElementUI样式表


config.baseURL;  // 对应环境api
Vue.config.productionTip = false;
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
