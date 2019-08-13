<template>
    <div class="home">
        <el-row :gutter="10" style="margin:0px;height:7%;">
            <el-col style="width: 100%;height:100%;">
                <div class="grid-content bg-purple" style="width: 100%;height:100%;">
                    <Header></Header>
                </div>
            </el-col>
        </el-row>
        
        <div class='containerWapper'>
            <el-row :gutter="10" style="margin:0px;height:100%;">
                    <el-col style="height:100%;">
                        <div class="grid-content bg-purple-light">
                            <Sidebar></Sidebar>
                        </div>
                    </el-col>
                </el-row> 
                <el-row :gutter="10" style="margin:0px;height:100%;width: 100%;">
                    <el-col :span="24" style="height:93%;">
                        <div class="grid-content bg-purple-dark" style="height:100%;width: 100%;">
                            <Container-Top-NavBar></Container-Top-NavBar>
                            <!-- 主内容出口 -->
                            <div class='ContainerCenter'>
                                <keep-alive>
                                    <router-view></router-view>
                                </keep-alive>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="24" style="height:7%;border-top:1px solid #eee;">
                        <div class="grid-content bg-purple-dark bg-purple-darkTwo">
                            <span>本系统由私人开发</span>
                            <span>Vue项目环境配置标准版-后台管理系统©2019/8/12</span>
                        </div>
                    </el-col>
                </el-row>
        </div>
    </div>
</template>
<script>
    import Sidebar from '@/components/Sidebar'
    import Header from '@/components/Header'
    import ContainerTopNavBar from '@/components/ContainerTopNavBar'
    export default {
        name: 'home',
        methods: {

        },
        components: {
            Sidebar,
            Header,
            ContainerTopNavBar,
        }
    }
</script>
<style scoped lang="scss">
    .home {
        width: 100%;
        height: 100%;
    }
    .el-container {
        width: 100%;
        height: 100%;
    }
    .el-col{
        padding: 0px !important;
    }
    .containerWapper{
        width: 100%;
        height:93%;
        display:flex;
    }
    .el-aside{
        position: relative;
    }
    .el-header,
    .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        height: 70px !important;
        background: #242f42;
        color:#fff;
    }
    .el-header{
        padding: 0px;
    }
    .bg-purple-light{
        height:100%;
    }
    .ContainerCenter{
        width: 100%;
        height:95.5%;
    }
    .bg-purple-darkTwo{
       display:flex;
       align-items: center;
       justify-content:center;
       background:#242f42;
       color:#fff;
       height:100%;
       flex-direction: column;
    }
    .bg-purple-darkTwo span:nth-child(2){
        margin-top: 10px;
    }
</style>