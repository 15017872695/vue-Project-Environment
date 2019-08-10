import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)
const Login = ()=>import("@/views/login");
const NotFoundComponent = ()=>import("@/views/notFoundComponent");
const Home = ()=>import("@/views/home")

export default new Router({
  mode:'history',
  routes: [
    { path:'/', name:'/', component:Home},
    { path: '*', name:'404', component: NotFoundComponent },
    { path:'/login', name:'login', component:Login},
    { path: '/home', name:'home', component: Home }
  ]
})
