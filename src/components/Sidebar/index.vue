<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse"  background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '@/utils/bus';
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-s-home',
                        index: 'home',
                        title: '系统首页'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: 'home/table',
                        title: '基础表格'
                    },
                    {
                        icon: 'el-icon-document-copy',
                        index: 'home/tabs',
                        title: 'tab选项卡'
                    },
                    { 
                        icon: 'el-icon-document',
                        index: 'home/from',
                        title: '表单相关',
                        subs: [
                            {
                                index: 'home/from/basicForm',
                                title: '基本表单'
                            },
                            {
                                index: 'home/levelMenu',
                                title: '三级菜单',
                                subs: [
                                    {
                                        index: 'home/levelMenu/richTextEditor',
                                        title: '富文本编辑器'
                                    },
                                    {
                                        index: 'home/levelMenu/markdown',
                                        title: 'markdown'
                                    },
                                ]
                            },
                            {
                                index: 'home/from/upload',
                                title: '文件上传'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-off',
                        index: 'home/icon',
                        title: '自定义图标'
                    },
                    {
                        icon: 'el-icon-pie-chart',
                        index: 'home/charts',
                        title: 'schart图表'
                    },
                    {
                        icon: 'el-icon-rank',
                        index: 'home/dragComponent',
                        title: '拖拽组件',
                        subs: [
                            {
                                index: 'home/dragComponent/drag',
                                title: '拖拽列表',
                            },
                            {
                                index: 'home/dragComponent/dialog',
                                title: '拖拽弹框',
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-collection-tag',
                        index: 'home/i18n',
                        title: '国际化功能'
                    },
                    {
                        icon: 'el-icon-warning-outline',
                        index: 'home/errorHandling',
                        title: '错误处理',
                        subs: [
                            {
                                index: 'home/errorHandling/permission',
                                title: '权限测试'
                            },
                            {
                                index: 'notFoundComponent',
                                title: '404页面'
                            }
                        ]
                    }
                    ,
                    {
                        icon: 'el-icon-cold-drink',
                        index: 'home/donate',
                        title: '支持作者'
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{

        height:100%;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
    .el-menu{
        border: none;
    }
</style>
