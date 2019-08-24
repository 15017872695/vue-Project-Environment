<template>
    <div class='basicTable'>
        <el-row :gutter="20" style='width:100%;height:100%;margin:0px;'>
            <el-col :span="24" style='padding:0px;height:100%;'>
                <el-card shadow="hover" class="TableCardWapper">
                    <el-col :span="24" style='padding:0px;box-sizing: border-box;display:flex;align-items: center;'>
                        <el-button type="primary" icon="el-icon-delete" size='small' @click="delAll">批量删除</el-button>
                        <el-select v-model="value" placeholder="筛选地区" size='small'
                            style="margin-left:10px;width:140px;">
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-input placeholder="请输入地区名" v-model="inputValue" clearable size='small'
                            style='margin-left:10px;width:20%;'>
                        </el-input>
                        <el-button type="primary" icon="el-icon-search" size='small' style="margin-left:10px;"
                            @click="search">搜索
                        </el-button>
                    </el-col>
                    <el-col :span="24"
                        style='padding:0px;box-sizing: border-box;display:flex;align-items: center;margin-top:20px;'>
                        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" border
                            @selection-change="handleSelectionChange">
                            <el-table-column type="selection" width="55">
                            </el-table-column>
                            <el-table-column prop="id" label="ID" width="50">
                            </el-table-column>
                            <el-table-column prop="name" label="用户名" width="170">
                            </el-table-column>
                            <el-table-column prop="money" label="账户余额" width="170">
                            </el-table-column>
                            <el-table-column prop="thumb" label="头像" width="170">
                                <template slot-scope="scope">
                                    <el-tooltip class="item" effect="dark" content="点击查看大图" placement="bottom">
                                        <img :src="scope.row.thumb" alt="">
                                    </el-tooltip>
                                </template>
                            </el-table-column>
                            <el-table-column prop="address" label="地址" show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="state" label="状态" width="130"
                                :filters="[{ text: '成功', value: '成功' }, { text: '待审核', value: '待审核' }, { text: '失败', value: '失败' }]"
                                :filter-method="filterTag" filter-placement="bottom-end">
                                <template slot-scope="scope">
                                    <el-tag
                                        :type="scope.row.state === '成功' ? 'success' : scope.row.state === '失败' ? 'danger' : 'warning'"
                                        close-transition>
                                        {{scope.row.state}}</el-tag>
                                </template>
                            </el-table-column>
                            <el-table-column label="注册时间" width="120">
                                <template slot-scope="scope">{{ scope.row.date }}</template>
                            </el-table-column>
                            <el-table-column label="操作" width="180" align="center">
                                <template slot-scope="scope">
                                    <el-button type="text" icon="el-icon-edit"
                                        @click="handleEdit(scope.$index, scope.row)" size='mini'>编辑</el-button>
                                    <el-button type="text" icon="el-icon-delete" class="red"
                                        @click="handleDelete(scope.$index, scope.row)" size='mini'>删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col>
                    <el-col :span="24"
                        style='padding:0px;box-sizing: border-box;display:flex;align-items: center;margin-top:20px;'
                        class='fenyePage'>
                        <div class="block">
                            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                :current-page="currentPage4" :page-sizes="[10, 50, 100, 500]" :page-size="10"
                                layout="total, sizes, prev, pager, next, jumper" :total="500">
                            </el-pagination>
                        </div>
                    </el-col>
                </el-card>
            </el-col>
        </el-row>
        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="50px">
                <el-form-item label="日期">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd"
                        style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 删除提示框 -->
        <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt" style="text-align: center;">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    import $http from "@/api/user.js";
    export default {
        name: 'basicTable',
        data: function () {
            return {
                options: [{
                    value: '选项1',
                    label: '广东省'
                }, {
                    value: '选项2',
                    label: '湖南省'
                }, {
                    value: '选项3',
                    label: '广西省'
                }, {
                    value: '选项4',
                    label: '四川省'
                }, {
                    value: '选项5',
                    label: '海南省'
                }],
                tableData: null,
                value: '',
                inputValue: '',
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 1,
                queryPage: 1,
                editVisible: false,
                delVisible: false,
                form: {
                    name: '',
                    date: '',
                    address: ''
                },
                idx: -1,
                id: -1
            }
        },
        mounted() {
            this.getData(this.queryPage);
        },
        methods: {
            getData(queryPage) {
                var _this = this;
                $http.getTableData(this.queryPage).then(function (resolve) {
                    console.log(resolve.list)
                    _this.tableData = resolve.list;
                }).catch(function (error) {
                    console.log(error)
                })
            },
            search() {

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
                console.log(this.multipleSelection)
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.getData(val);
            },
            delAll() {
                for (var i = 0; i < this.tableData.length; i++) {
                    for (var j = 0; j < this.multipleSelection.length; j++) {
                        if (this.tableData[i].name == this.multipleSelection[j].name && this.tableData[i].id == this
                            .multipleSelection[j].id) {
                            this.tableData.splice(i, 1);
                        }
                    }
                }
            },
            handleDelete(index, row) {
                console.log(index, row)
                this.id = row.id;
                this.idx = index;
                this.delVisible = true;
            },
            handleEdit(index, row) {
                console.log(index, row)
                this.idx = index;
                this.id = row.id;
                this.form = {
                    id: row.id,
                    name: row.name,
                    date: row.date,
                    address: row.address
                }
                this.editVisible = true;
            },
            // 保存编辑
            saveEdit() {
                this.editVisible = false;
                this.$message.success(`修改第 ${this.idx+1} 行成功`);
                if (this.tableData[this.idx].id === this.id) {
                    this.$set(this.tableData, this.idx, this.form);
                } else {
                    for (let i = 0; i < this.tableData.length; i++) {
                        if (this.tableData[i].id === this.id) {
                            this.$set(this.tableData, i, this.form);
                            return;
                        }
                    }
                }
            },
            // 确定删除
            deleteRow() {
                this.$message({
                    message: '删除成功',
                    type: 'success'
                });
                this.delVisible = false;
                console.log(this.tableData[this.idx].id + '' + this.id)
                if (this.tableData[this.idx].id === this.id) {

                    this.tableData.splice(this.idx, 1);
                } else {
                    for (let i = 0; i < this.tableData.length; i++) {
                        if (this.tableData[i].id === this.id) {
                            this.tableData.splice(i, 1);
                            return;
                        }
                    }
                }
            }
        }
    }
</script>
<style scope>
    .basicTable {
        width: 100%;
        height: 100%;
        background: #fff;
        position: relative;
    }

    .TableCardWapper {
        width: 100%;
        height: 100%;
        padding-bottom: 60px;
        box-sizing: border-box;
        overflow-y: scroll;
    }

    .TableCardWapper .el-card__body {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }

    .has-gutter {
        background: #888 !important;
    }

    .cell {
        text-align: center;
    }

    .el-table-filter {
        left: 1452px !important;
    }

    .red {
        color: red;
    }

    .fenyePage {
        width: 97%;
        padding: 10px 0 !important;
        display: flex;
        align-items: center;
        margin-top: 20px;
        position: absolute;
        bottom: 1px;
        background: #fff;
        z-index: 999;
        justify-content: flex-end;
    }

    .cell img {
        width: 50px;
        height: 50px;
        cursor: pointer;
    }

    .el-dialog,
    .el-dialog--center {
        margin-top: 40vh !important;
    }

    /* .fenyePage {
        width: 97%;
        padding: 10px 0 !important;
        display: flex;
        align-items: center;
        margin-top: 20px;
        position: absolute;
        bottom: 1px;
        background: #fff;
        z-index: 999;
        justify-content: flex-end;
    }
    .cell img{
        width: 50px;
        height:50px;
        cursor: pointer;
    }
    .viewer-container,.viewer-backdrop{
        z-index: 9999 !important;
        position: fixed !important;
        top: 0px !important;
        height: 100% !important;
        width: 100% !important;
    }
    .viewer-canvas,.viewer-navbar{
        display: flex;
    justify-content: center;
    align-items: center;
    }
    .viewer-navbar ul{
        width:100% !important;
        height:100%;
        display: flex;
        max-width: 1240px;
        justify-content: center;
        align-items: center;
    }
    .viewer-navbar ul li{
        flex:1;
        height:auto !important;
        display: flex !important;
        align-items: center !important;
    }
    .viewer-navbar ul li img{
        height: 100% !important;
        width: 100% !important;
        transform: translateY(0px) !important;
    } */
</style>