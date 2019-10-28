<template>
    <div class="PermissionContainer">
        <el-card class="box-card" shadow="hover">
            <el-divider content-position="left">权限配置</el-divider>
            <div class="box-content">
                <template v-for="(item,index) in ItemData" v-key="index">
                    <el-button type="primary">{{item}}</el-button>
                </template>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    name:'permission',
    data:()=>{
        return {
            ItemData:['系统设置','修改密码','用户权限配置','用户管理']
        }
    }
}
</script>
<style scope>
    .PermissionContainer{
        width: 97%;
        height:95.5%;
        position: absolute;
    }
    .box-content{
        width: 100%;
        height:auto;
    }
</style>