<template>
    <div class='tabs'>
        <el-row :gutter="20" style='width:100%;height:100%;margin:0px;'>
            <el-col :span="24" style='padding:0px;height:100%;'>
                <el-card class="TabsCardWapper">
                    <el-tabs :tab-position="tabPosition" style="height: 200px;" v-model="message">
                        <el-tab-pane label="未读消息" name='first'>
                            <el-table :data="unread" :show-header="false" style="width: 100%">
                                <el-table-column>
                                    <template slot-scope="scope">
                                        <span class="message-title">{{scope.row.title}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="date" width="180"></el-table-column>
                                <el-table-column width="120">
                                    <template slot-scope="scope">
                                        <el-button size="small" @click="handleRead(scope.$index)">标为已读</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <div class="handle-row">
                                <el-button type="primary">全部标为已读</el-button>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="已读消息" name='second'>
                            <template v-if="message === 'second'">
                                <el-table :data="read" :show-header="false" style="width: 100%">
                                    <el-table-column>
                                        <template slot-scope="scope">
                                            <span class="message-title">{{scope.row.title}}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="date" width="150"></el-table-column>
                                    <el-table-column width="120">
                                        <template slot-scope="scope">
                                            <el-button type="danger" @click="handleDel(scope.$index)">删除</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <div class="handle-row">
                                    <el-button type="danger">删除全部</el-button>
                                </div>
                            </template>
                        </el-tab-pane>
                        <el-tab-pane label="回收站" name='third'>
                            <template v-if="message === 'third'">
                                <el-table :data="recycle" :show-header="false" style="width: 100%">
                                    <el-table-column>
                                        <template slot-scope="scope">
                                            <span class="message-title">{{scope.row.title}}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="date" width="150"></el-table-column>
                                    <el-table-column width="120">
                                        <template slot-scope="scope">
                                            <el-button @click="handleRestore(scope.$index)">还原</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <div class="handle-row">
                                    <el-button type="danger">清空回收站</el-button>
                                </div>
                            </template>
                        </el-tab-pane>
                    </el-tabs>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        name: 'tabs',
        data: function () {
            return {
                tabPosition: 'left',
                message: 'first',
                unread: [{
                    date: '2018-04-19 20:00:00',
                    title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
                }, {
                    date: '2018-04-19 21:00:00',
                    title: '今晚12点整发大红包，先到先得',
                }],
                read: [{
                    date: '2018-04-19 20:00:00',
                    title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
                }],
                recycle: [{
                    date: '2018-04-19 20:00:00',
                    title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
                }]
            }
        },
        methods: {
            handleRead(index) {
                const item = this.unread.splice(index, 1);
                this.read = item.concat(this.read);
            },
            handleDel(index) {
                const item = this.read.splice(index, 1);
                this.recycle = item.concat(this.recycle);
            },
            handleRestore(index) {
                const item = this.recycle.splice(index, 1);
                this.read = item.concat(this.read);
            }
        }
    }
</script>
<style scope>
    .tabs,
    .TabsCardWapper,
    .el-card__body,
    .el-tabs {
        width: 100%;
        height: 100% !important;
    }

    .message-title {
        cursor: pointer;
    }

    .handle-row {
        margin-top: 30px;
    }
</style>