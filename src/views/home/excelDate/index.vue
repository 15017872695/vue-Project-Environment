<template>
    <div class="excelDate">
        <el-row :gutter="10" style="width:100%;height:100%;margin:0px;">
            <el-col :span="24" style='padding:0px;height:100%;'>
                <el-card shadow="hover"  style='padding:0px;height:100%;'>
                        <div class="excelDate-Title">
                            <el-input v-model="input" placeholder="请输入内容"></el-input>
                            <el-upload
                                class="upload-demo"
                                action=""
                                :on-change="handleChange"
                                :show-file-list="false"
                                :on-remove="handleRemove"
                                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                                :auto-upload="false">
                                <el-button type="primary" native-type="file">导入Excel<i class="el-icon-upload2 el-icon--right"></i></el-button>
                                <span slot="tip" class="el-upload__tip">注：只 能 上 传 xlsx / xls 文 件</span>
                            </el-upload>
                            <el-button type="primary" style="height:40px;margin-left:20px;" @click="outExe">导出Excel<i class="el-icon-download el-icon--right"></i></el-button>
                        </div>
                        <el-table
                            :data="tableData"
                            border
                            style="width: 90%;margin-top:20px;">
                            <el-table-column
                            fixed
                            prop="date"
                            label="日期"
                            width="150">
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="姓名"
                            width="120">
                            </el-table-column>
                            <el-table-column
                            prop="province"
                            label="省份"
                            width="120">
                            </el-table-column>
                            <el-table-column
                            prop="city"
                            label="市区"
                            width="120">
                            </el-table-column>
                            <el-table-column
                            prop="address"
                            label="地址"
                            width="400">
                            </el-table-column>
                            <el-table-column
                            prop="zip"
                            label="邮编"
                            width="120">
                            </el-table-column>
                            <el-table-column
                            prop="catr"
                            label="性别"
                            width="70">
                            </el-table-column>
                            <el-table-column
                            prop="zhiye"
                            label="职业"
                            width="150">
                            </el-table-column>
                            <el-table-column
                            fixed="right"
                            label="操作"
                            width="168">
                                <template slot-scope="scope">
                                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                    <el-button type="text" size="small">编辑</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name:'excelDate',
    data(){
        return{
            input: '',
            tableData: [],
            excelData:[]
        }
    },
    methods: {
        handleChange(file, fileList){
            console.log(fileList)
            this.fileTemp = file.raw
            // 判断上传文件格式
            if(this.fileTemp){
                if((this.fileTemp.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') || (this.fileTemp.type == 'application/vnd.ms-excel')){
                    this.importfxx(this.fileTemp)
                } else {
                    this.$message({
                        type:'warning',
                        message:'附件格式错误，请删除后重新上传！'
                    })
                }
            } else {
                this.$message({
                    type:'warning',
                    message:'请上传附件！'
                })
            }
        },
        // 移除excel表
        handleRemove(file,fileList){
            this.fileTemp = null
        },
        // 导入excel表
        importfxx(obj) {
            console.log(obj)
            let _this = this;
            // 通过DOM取文件数据
            this.file = obj
            var rABS = false; //是否将文件读取为二进制字符串
            var f = this.file;
            var reader = new FileReader();
            FileReader.prototype.readAsBinaryString = function(f) {
                var binary = "";
                var rABS = false; //是否将文件读取为二进制字符串
                var pt = this;
                var wb; //读取完成的数据
                var outdata;
                var reader = new FileReader();
                reader.onload = function(e) {
                var bytes = new Uint8Array(reader.result);
                
                var length = bytes.byteLength;
                for(var i = 0; i < length; i++) {
                    binary += String.fromCharCode(bytes[i]);
                }
                var XLSX = require('xlsx');
                if(rABS) {
                    wb = XLSX.read(btoa(fixdata(binary)), { //手动转化,  
                        type: 'base64',
                    });
                } else {
                    wb = XLSX.read(binary, {
                        type: 'binary',
                        
                    });
                }
                
                outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {raw:true,dateNF:'YYYY-MM-DD'});//outdata就是读取excel内容之后输出的东西
                    this.da = [...outdata]
                    let arr = []
                    this.da.map(v => {
                        let obj = {}
                        obj.zip = v['zip'] 
                        obj.date = v['date']
                        obj.name = v['name']
                        obj.province = v['province']
                        obj.city = v['city']
                        obj.address = v['address']
                        obj.catr = v['catr']
                        obj.zhiye = v['zhiye']
                        arr.push(obj)
                    })
                    // 把读取的excel表格中的内容放进tableData2中(这里要改成自己的表的名字)
                    _this.tableData = _this.tableData.concat(arr)
                    console.log( _this.tableData)
                }
                reader.readAsArrayBuffer(f);
            }
            if(rABS) {
                reader.readAsArrayBuffer(f);
            } else {
                reader.readAsBinaryString(f);
            }
        },
        outExe() {
            this.$confirm('此操作将导出excel文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                console.log(this.tableData)
                if(this.tableData.length < 1){
                    this.$message({
                        type:'warning',
                        message:'当前数据表暂无数据'
                    })
                }
                this.excelData = this.tableData //你要导出的数据list。
                this.export2Excel()
            }).catch(() => {
                
            });
        },
        export2Excel() {
            var that = this;
            require.ensure([], () => {
                const { export_json_to_excel } = require('../../../assets/excel/Export2Excel'); //这里必须使用绝对路径
                const tHeader = ['zip','date', 'name', 'province','city','address','catr','zhiye']; // 导出的表头名
                const filterVal =  ['zip','date', 'name', 'province','city','address','catr','zhiye']; // 导出的表头字段名
                const list = that.excelData;
                console.log(filterVal)
                console.log(that.excelData)
                const data = that.formatJson(filterVal, list);
                console.log(data)
                let time1,time2 = '';
                // if(this.start !== '') {
                //     time1 = that.moment(that.start).format('YYYY-MM-DD')
                // }
                // if(this.end !== '') {
                //     time2 = that.moment(that.end).format('YYYY-MM-DD')
                // }
                // ${time1}-${time2}
                export_json_to_excel(tHeader, data, `[测试数据]后台数据导出excel`);// 导出的表格名称，根据需要自己命名
            })
        },
        formatJson(filterVal, jsonData) {
            console.log(filterVal)
            console.log(jsonData)
            return jsonData.map(v => filterVal.map(j => v[j]))
        }
    }
}
</script>
<style scope lang="scss">
    .excelDate{
        width: 100%;
        height:100%;
    }
    .el-card{
        width: 100%;
        overflow-y:auto;
    }
    .el-card {
        
    }
    .excelDate-Title{
        width:100%;display:flex;
    }
    .excelDate-Title .el-input{
        width:15%;
    }
    .upload-demo{
        width: auto;
        display: flex;
        flex-direction:column;
        margin-left:20px;
    }
</style>
