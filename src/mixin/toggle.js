import Vue from 'vue';
// 配置全局mixin混入
Vue.mixin({
    methods:{
        // 消息提示框
        MixinMessage(msg,olt){
            this.$message({
                message: msg,
                type: olt
            });
        }
    }
})