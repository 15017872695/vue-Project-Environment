<template>
    <div>
         <div>
            <el-button
              icon="iconfont icon-shouqi"
              type="primary"
              class="btn-arrow-tip"
              plain
              @click="refresh_btn"
            >刷新当前页</el-button>
        </div>
        <new-Component :key="timer"></new-Component>
    </div>
</template>
<script>
import newComponent from '../../../components/newComponent';
export default {
    name:'i18n',
    provide(){//获取原来注入（暂未用到）
        return{
            
        }
    },
    data(){
        return {
            timer:new Date().getTime()
        }
    },
    components:{
        'new-Component':newComponent
    },
    methods:{
        refresh_btn(){
            this.timer = new Date().getTime()
            console.log('组件刷新了');
        }
    }
}
</script>
<style lang="scss" scoped>
    .btn-arrow-tip{
        margin-bottom:5vh;
    }
</style>