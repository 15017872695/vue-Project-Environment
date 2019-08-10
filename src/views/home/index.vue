<template>
    <div class="home">
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-container>
                <el-aside width="250px">
                    <Sidebar></Sidebar>
                </el-aside>
                <el-container>
                    <el-main>Main</el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    import Sidebar from '@/components/Sidebar'
    import Header from '@/components/Header'
    export default {
        name: 'home',
        methods: {

        },
        components: {
            Sidebar,
            Header
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
    .el-aside{
        position: relative;
    }
    .el-header,
    .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-header{
        padding: 0px;
    }
</style>