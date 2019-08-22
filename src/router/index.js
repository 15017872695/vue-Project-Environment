import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { 
      path:'/', 
      redirect:'/home'
    },
    { 
      path: '/home', 
      name:'home',
      component: resolve => require(['@/views/home'],resolve),
      meta:{title:'首页'},
      children:[//children配置子路由
        {
          path:'/dashboard',
          name:'dashboard',
          component:resolve => require(['@/views/home/dashboard'],resolve),
          meta:{title:'系统首页'}//配置路由元信息
        },
        {
          path:'/icon',
          name:'icon',
          component:resolve => require(['@/views/home/icon'],resolve),
          meta:{title:'自定义图标'}
        },
        {
          path:'/table',
          name:'table',
          component:resolve => require(['@/views/home/table'],resolve),
          meta:{title:'基础表格'}
        },
        {
          path:'/tabs',
          name:'tabs',
          component:resolve => require(['@/views/home/tabs'],resolve),
          meta:{title:'tab选项卡'}
        },
        {
          path:'/basicForm',
          name:'basicForm',
          component:resolve => require(['@/views/home/form/basicForm'],resolve),
          meta:{title:'基本表单'}
        },
        {
          path:'/richTextEditor',
          name:'richTextEditor',
          component:resolve => require(['@/views/home/form/levelMenu/richTextEditor'],resolve),
          meta:{title:'富文本编辑器'}
        },
        {
          path:'/markdown',
          name:'markdown',
          component:resolve => require(['@/views/home/form/levelMenu/markdown'],resolve),
          meta:{title:'markdown编辑器'}
        },
        {
          path:'/upload',
          name:'upload',
          component:resolve => require(['@/views/home/form/upload'],resolve),
          meta:{title:'文件上传'}
        },
        {
          path:'/charts',
          name:'charts',
          component:resolve => require(['@/views/home/charts'],resolve),
          meta:{title:'echarts图标'}
        },
        {
          path:'/drag',
          name:'drag',
          component:resolve => require(['@/views/home/dragComponent/drag'],resolve),
          meta:{title:'拖拽列表'}
        },
        {
          path:'/dialog',
          name:'dialog',
          component:resolve => require(['@/views/home/dragComponent/dialog'],resolve),
          meta:{title:'拖拽弹框'}
        },
        {
          path:'/i18n',
          name:'i18n',
          component:resolve => require(['@/views/home/i18n'],resolve),
          meta:{title:'国际化'}
        },
        {
          path:'/permission',
          name:'permission',
          component:resolve => require(['@/views/home/errorHandling/permission'],resolve),
          meta:{title:'权限测试' , permission:true}
        },
        {
          path:'/errorHandling',
          name:'errorHandling',
          component: resolve => require(['@/views/home/errorHandling'], resolve),
          meta: { title: '错误处理' }
        },
        {
          path:'/donate',
          name:'donate',
          component: resolve => require(['@/views/home/donate'], resolve),
          meta: { title: '支持作者' }
        },
      ]
    },
    { 
      path: '*', 
      component:resolve => require(['@/views/notFoundComponent'],resolve),
    },
    { 
      path:'/login', 
      name:'login',
      component:resolve => require(['@/views/login'],resolve),
    }
  ]
})
