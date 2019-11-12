<template>
    <div class='dashboardWapper'>
        <!-- 顶部信息栏 -->
        <el-row :gutter="20" class='homeTopUserDashboard'>
            <!-- 左侧用户信息栏 -->
            <el-col :span="8">
                <el-card shadow="hover" class="homeTopUserInfo">
                    <div class='userInfo'>
                        <el-col :span="12">
                            <img src="@/assets/img/HTMLicon.png" alt="">
                        </el-col>
                        <el-col :span="12">
                            <span>先森·余</span>
                            <span>超级管理员</span>
                        </el-col>
                    </div>
                    <div class='userLoginTime'>
                        <div>
                            <span>上次登录时间：</span>
                            <span>2019-8-20</span>
                        </div>
                        <div>
                            <span>上次登录地点：</span>
                            <span>深圳</span>
                        </div>
                    </div>
                </el-card>
                <el-card shadow="hover" class="homeBottomUserInfo">
                    <div slot="header" class="clearfix">
                        <div slot="header" class="clearfix">
                            <span>语言详情</span>
                        </div>
                    </div>
                    Vue、JavaScript
                    <el-progress :percentage="78" color="#42b983"></el-progress>
                    React
                    <el-progress :percentage="60" color="#f1e05a"></el-progress>
                    DIV、CSS、HTML
                    <el-progress :percentage="95"></el-progress>
                    微信小程序
                    <el-progress :percentage="80" color="#FF82AB"></el-progress>
                </el-card>
            </el-col>
            <!-- 右侧访问、事项信息栏 -->
            <el-col :span="16">
                <div class='homeUserTask'>
                    <el-card shadow="hover">
                        <div>
                            <img src="@/assets/img/sself.png" alt="">
                        </div>
                        <div>
                            <span style="color:rgb(10, 106, 216);">5201314</span>
                            <span>用户访问量</span>
                        </div>
                    </el-card>
                    <el-card shadow="hover">
                        <div>
                            <img src="@/assets/img/lingdang.png" alt="">
                        </div>
                        <div>
                            <span style="color:rgb(19, 197, 73);">5201314</span>
                            <span>系统消息</span>
                        </div>
                    </el-card>
                    <el-card shadow="hover">
                        <div>
                            <img src="@/assets/img/gouwuche.png" alt="">
                        </div>
                        <div>
                            <span style='color:rgba(255, 60, 0,1);'>5201314</span>
                            <span>总采购量</span>
                        </div>
                    </el-card>
                </div>
                <!-- echarts图标 -->
                <el-card shadow="hover" class="echartsWapper"></el-card>
            </el-col>
        </el-row>
        <!-- 底部图表展示栏 -->
        <el-row :gutter="20" style='width:100%;height:auto;margin-left:0px;'>
            <!-- 部分管理层人员列表 -->
            <el-col :span="12">
                <el-card shadow="hover" class='homeUserDiagram'>
                    <el-table :data="tableData4" border style="width: 100%">
                        <el-table-column fixed prop="date" label="日期" width="150">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名" width="120">
                        </el-table-column>
                        <el-table-column prop="province" label="省份" width="120">
                        </el-table-column>
                        <el-table-column prop="city" label="市区" width="120">
                        </el-table-column>
                        <el-table-column prop="address" label="地址" width="300">
                        </el-table-column>
                        <el-table-column prop="zip" label="邮编" width="120">
                        </el-table-column>
                        <el-table-column fixed="right" label="操作" width="100">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                <el-button type="text" size="small">编辑</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
            <!-- 月季优秀员工列表 -->
            <el-col :span="12">
                <el-card shadow="hover" class='homeUserLineChart'>
                    <el-table ref="multipleTable" :data="tableData4" tooltip-effect="dark" style="width: 100%"
                        @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="55">
                        </el-table-column>
                        <el-table-column label="日期" width="120">
                            <template slot-scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column prop="name" label="姓名" width="120">
                        </el-table-column>
                        <el-table-column prop="address" label="地址" show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
                    <div style="padding:0px 0px 10px 20px;box-sizing: border-box;margin-top:10px;">
                        <el-button @click="toggleSelection()" plain>取消选择</el-button>
                        <el-button @click="toggleDelect()" type="danger">删除</el-button>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        name: 'dashboard',
        data: function () {
            return {
                tableData4: [{
                    date: '2016-05-04',
                    name: '先森·余',
                    province: '广东',
                    city: '深圳',
                    address: '在那悠远的地方~',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '女仕·黄',
                    province: '广东',
                    city: '深圳',
                    address: '在那悠远的地方~',
                    zip: 200333
                }, {
                    date: '2016-05-08',
                    name: '长子·小余',
                    province: '广东',
                    city: '深圳',
                    address: '在那悠远的地方~',
                    zip: 200333
                }, {
                    date: '2016-05-08',
                    name: '闺女·余小',
                    province: '广东',
                    city: '深圳',
                    address: '在那悠远的地方~',
                    zip: 200333
                }, {
                    date: '2016-05-08',
                    name: '小长子·小余小',
                    province: '广东',
                    city: '深圳',
                    address: '在那悠远的地方~',
                    zip: 200333
                }, ],
                multipleSelection: []
            }
        },
        methods: {
            getEchars() {
                // 基于准备好的dom，初始化echarts实例
                var myChartOne = this.$echarts.init(document.getElementsByClassName('echartsWapper')[0]);
                // console.log(myChartOne);
                var optionOne = {
                    title: {
                        text: '后台管理系统数据表',
                        subtext: '纯属虚构'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['用户访问量', '系统消息', '总采购量']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataView: {
                                show: true,
                                readOnly: false
                            },
                            magicType: {
                                show: true,
                                type: ['line', 'bar']
                            },
                            restore: {
                                show: true
                            },
                            saveAsImage: {
                                show: true
                            }
                        }
                    },
                    calculable: true,
                    xAxis: [{
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    }],
                    yAxis: [{
                        type: 'value'
                    }],
                    series: [{
                            name: '用户访问量',
                            type: 'bar',
                            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                            // itemStyle: {
                            //     normal: {
                            //         color: '#0A6AD8'
                            //     }
                            // },
                            markPoint: {
                                data: [{
                                        type: 'max',
                                        name: '最大值'
                                    },
                                    {
                                        type: 'min',
                                        name: '最小值'
                                    }
                                ]
                            },
                            markLine: {
                                data: [{
                                    type: 'average',
                                    name: '平均值'
                                }]
                            }
                        },
                        {
                            name: '系统消息',
                            type: 'bar',
                            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                            // itemStyle: {
                            //     normal: {
                            //         color: '#13C549'
                            //     }
                            // },
                            markPoint: {
                                data: [{
                                        name: '年最高',
                                        value: 182.2,
                                        xAxis: 7,
                                        yAxis: 183
                                    },
                                    {
                                        name: '年最低',
                                        value: 2.3,
                                        xAxis: 11,
                                        yAxis: 3
                                    }
                                ]
                            },
                            markLine: {
                                data: [{
                                    type: 'average',
                                    name: '平均值'
                                }]
                            }
                        },
                        {
                            name: '总采购量',
                            type: 'bar',
                            data: [3.6, 6.9, 10.0, 28.4, 30.7, 70.7, 175.6, 200.2, 55.7, 20.8, 8.0, 4.3],
                            // itemStyle: {
                            //     normal: {
                            //         color: '#FF3C00'
                            //     }
                            // },
                            markPoint: {
                                data: [{
                                        name: '年最高',
                                        value: 182.2,
                                        xAxis: 7,
                                        yAxis: 183
                                    },
                                    {
                                        name: '年最低',
                                        value: 2.3,
                                        xAxis: 11,
                                        yAxis: 3
                                    }
                                ]
                            },
                            markLine: {
                                data: [{
                                    type: 'average',
                                    name: '平均值'
                                }]
                            }
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChartOne.setOption(optionOne);
            },
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            handleClick(row) {
                console.log(row);
            },
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            toggleDelect(){
                var newArray = [];
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    for(var i=0;i<this.tableData4.length;i++){
                        if(this.multipleSelection.length<1){
                            return false;
                        }
                        if(i>this.multipleSelection.length-1){
                            return false;
                        }
                        if(this.multipleSelection[i].name == this.tableData4[i].name){
                            console.log(this.tableData4[i].name)
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                        }
                    }
                    
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                });
            },
        },
        mounted() {
            this.getEchars();
        },
        watch: {

        }
    }
</script>
<style scope>
    .dashboardWapper {
        width: 100%;
        height: 100%;
    }

    .homeTopUserDashboard {
        margin-bottom: 0.4rem;
    }

    .homeTopUserInfo {
        margin-bottom: 0.4rem;
        display: flex;
        flex-direction: column;
    }

    .homeTopUserInfo .userInfo {
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-bottom: 2px solid #ccc;
        padding-bottom: 25px;
        box-sizing: border-box;
    }

    .homeTopUserInfo .userInfo>div:nth-child(1) {
        border-radius: 50%;
    }

    .homeTopUserInfo .userInfo>div:nth-child(1) img {
        width: 50%;
    }

    .homeTopUserInfo .userInfo>div:nth-child(2) {
        display: flex;
        flex-direction: column;
    }

    .homeTopUserInfo .userInfo>div:nth-child(2) span:nth-child(1) {
        margin-bottom: 10px;
        font-size: 0.6rem;
        font-weight: bold;
    }

    .homeTopUserInfo .userInfo>div:nth-child(2) span:nth-child(2) {
        font-size: 0.2rem;
        color: #ccc;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .userLoginTime div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 10px;
        color: rgb(187, 184, 184);
    }

    .userLoginTime {
        margin: 30px 0px 10px 0px;
    }

    .userLoginTime div>span:nth-child(2) {
        margin-left: 50px;
    }

    .el-progress {
        margin-bottom: 10px;
    }

    .el-progress-bar__outer {
        background: #fff;
    }

    .clearfix {
        width: 100%;
    }

    .homeUserTask {
        display: flex;
    }

    .homeUserTask div {
        flex: 1;
        height: 90px;
        display: flex;
        align-items: center;
    }

    .homeUserTask div:nth-child(2) {
        margin: 0 20px;
    }

    .homeUserTask .el-card__body {
        display: flex;
        padding: 0px !important;
    }

    .homeUserTask .el-card__body img {
        width: 40%;
    }

    .homeUserTask>div:nth-child(1)>.el-card__body>div:nth-child(1) {
        background: rgb(10, 106, 216);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .homeUserTask>div:nth-child(2)>.el-card__body>div:nth-child(1) {
        background: rgb(19, 197, 73);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .homeUserTask>div:nth-child(3)>.el-card__body>div:nth-child(1) {
        background: rgba(255, 60, 0, 1);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .homeUserTask .el-card__body>div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .homeUserTask .el-card__body>div:nth-child(2)>span:nth-child(1) {
        font-size: 23px;
        font-weight: bold;
    }

    .homeUserTask .el-card__body>div:nth-child(2)>span:nth-child(2) {
        margin-top: 5px;
        font-size: 13px;
        color: #ccc;
    }

    .echartsWapper {
        width: 100%;
        height: 412px;
        margin-top: 20px;
    }

    .echartsWapper>div:nth-child(1) {
        width: 100% !important;
        height: 100% !important;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20%;
    }

    .echartsWapper canvas {
        margin-top: 10px !important;
        margin-left: 5px !important;
    }

    .homeUserDiagram .el-card__body,.homeUserLineChart .el-card__body{
        height: auto;
        overflow-y: auto;
        padding:0px !important;
    }
</style>