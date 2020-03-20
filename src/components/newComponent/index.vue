<template>
  <div class="myNeedDeal app-container clearfix">
    <div class="condition">
      <el-card shadow="never" style="margin-bottom:20px" class="box-card">
        <el-form :inline="true" label-position="right" label-width="70px" size="small">
          <el-form-item label="工号">
            <el-input v-model="title" placeholder="请输入工单标题" clearable size="small" />
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="name" placeholder="请输入工单标题" clearable size="small" />
          </el-form-item>
          <el-form-item>
            <el-button size="small" type="primary" @click="querySheet()">查询</el-button>
            <el-button class="operate-btn-color" plain @click="resetForm">重置</el-button>
            <el-button
              :icon="iconClass"
              type="primary"
              class="btn-arrow-tip"
              plain
              @click="showMoreQueryField = !showMoreQueryField"
            />
          </el-form-item>
        </el-form>
      </el-card>
      <el-card shadow="never" class="box-card">
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort="{prop: 'date', order: 'descending'}"
          @row-click="seeDetails"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="num" label="次数" width="180"></el-table-column>

          <el-table-column prop="date" label="工单" sortable width="180"></el-table-column>

          <el-table-column prop="name" label="姓名" sortable width="180"></el-table-column>
          <el-table-column prop="address" label="工单数量" :formatter="formatter"></el-table-column>
        </el-table>
      </el-card>

      <el-card shadow="never" class="box-card" style="margin-top:20px;" v-show="showBox">
        <i class="el-icon-error" style="color:#E6A23C" @click="hideBoxFNC"></i>
        <el-table
          :data="newTableData"
          style="width: 100%"
          :default-sort="{prop: 'date', order: 'descending'}"
          @row-click="seeDetails"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="num" label="次数" width="180"></el-table-column>

          <el-table-column prop="date" label="工单" sortable width="180"></el-table-column>

          <el-table-column prop="name" label="姓名" sortable width="180"></el-table-column>
          <el-table-column prop="address" label="工单数量" :formatter="formatter"></el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script>
// import ElButton from "@/components/ElementUI/button/index.js"
// Vue.use(ElButton);
export default {
  data() {
    return {
      showBox: false,
      newTableData: [],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          num: "合并105",
          ID: 0,
          listData: [
            {
              date: "2016-05-02",
              name: "王小虎1",
              address: "上海市普陀区金沙江路 1518 弄"
            },
            {
              date: "2016-05-02",
              name: "王小虎1",
              address: "上海市普陀区金沙江路 1518 弄"
            },
            {
              date: "2016-05-02",
              name: "王小虎1",
              address: "上海市普陀区金沙江路 1518 弄"
            }
          ]
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          num: "合并100",
          ID: 1,
          address: "上海市普陀区金沙江路 1517 弄",
          listData: [
            {
              date: "2016-05-02",
              name: "王小虎2",
              address: "上海市普陀区金沙江路 1518 弄"
            },
            {
              date: "2016-05-02",
              name: "王小虎2",
              address: "上海市普陀区金沙江路 1518 弄"
            },
            {
              date: "2016-05-02",
              name: "王小虎2",
              address: "上海市普陀区金沙江路 1518 弄"
            }
          ]
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          num: "合并10",
          ID: 2,
          address: "上海市普陀区金沙江路 1519 弄",
          listData: [
            {
              date: "2016-05-02",
              name: "王小虎3",
              address: "上海市普陀区金沙江路 1518 弄"
            },
            {
              date: "2016-05-02",
              name: "王小虎3",
              address: "上海市普陀区金沙江路 1518 弄"
            },
            {
              date: "2016-05-02",
              name: "王小虎3",
              address: "上海市普陀区金沙江路 1518 弄"
            }
          ]
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          num: "合并1000",
          ID: 3,
          address: "上海市普陀区金沙江路 1516 弄",
          listData: [
            {
              date: "2016-05-02",
              name: "王小虎4",
              address: "上海市普陀区金沙江路 1518 弄"
            },
            {
              date: "2016-05-02",
              name: "王小虎4",
              address: "上海市普陀区金沙江路 1518 弄"
            },
            {
              date: "2016-05-02",
              name: "王小虎4",
              address: "上海市普陀区金沙江路 1518 弄"
            }
          ]
        }
      ],
      timeOutClose: null
    };
  },
  computed: {
    iconClass() {
      return this.showMoreQueryField
        ? "iconfont icon-shouqi"
        : "iconfont icon-zhankai";
    }
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    seeDetails(row, e) {
      this.showBox = true;
      // this.$router.push({
      //   path: `/eventList`
      // });
      for (const key in this.tableData) {
        if (this.tableData[key].ID == row.ID) {
          this.newTableData = this.tableData[key].listData;
        }
      }
      clearTimeout(this.timeOutClose);
      this.timeOutClose = setTimeout(() => {
        this.showBox = false;
      }, 10000);
    },
    hideBoxFNC() {
      this.showBox = false;
      clearTimeout(this.timeOutClose);
    }
  }
};
</script>