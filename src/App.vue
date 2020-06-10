<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import NProgress from 'nprogress' // 引入nprogress插件
import 'nprogress/nprogress.css'  // 这个nprogress样式必须引入
export default {
  name: "APP",
  data() {
    return {};
  },
  components: {},
  methods: {},
  created() {  
    this.$router.beforeEach((to, from, next) => {
      NProgress.start();
      next();
    });
    this.$router.afterEach(() => {
      NProgress.done();
    });
  }
};
</script>
<style lang="scss">
@import "assets/css/reset";
#app {
  width: 100%;
  height: 100%;
}
</style>
