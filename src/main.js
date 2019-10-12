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


// npm i slider-verification-code --save 图片滑块验证码
import SliderVerificationCode from 'slider-verification-code';
import 'slider-verification-code/lib/slider-verification-code.css';

// vue中使用excel导入导出，需要下载3个依赖包和2个js包
// npm install -S file-saver xlsx（这里其实安装了2个依赖）
// npm install -D script-loader
import Blob from './assets/excel/Blob.js';
import Export2Excel from './assets/excel/Export2Excel.js';
 
Vue.use(SliderVerificationCode);

// 步骤一：安装vue-i18n
  // npm install vue-i18n --save

// 引入i18n国际化插件
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
// 注册i18n实例并引入语言文件，文件格式等下解析
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('@/assets/languages/zh.json'),
    'en': require('@/assets/languages/en.json')
  }
})

Vue.use(element)

config.baseURL;  // 对应环境api

Vue.config.productionTip = false;

Vue.prototype.wx = wx;

Vue.prototype.$echarts = echarts;

Vue.use(echarts);

// vue router 报错： Uncaught (in promise) NavigationDuplicated {_name:""NavigationDuplicated"... 的解决方法
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
