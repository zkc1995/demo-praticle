<template>
  <div>
    <b>行全部相邻相等单元格合并</b>
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        label="日期"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
      >
      </el-table-column>
      <el-table-column
        prop="test"
        label="test"
      >
      </el-table-column>
    </el-table>
    <div class="line"></div>
    <b>行，部分单元格根据条件合并内容</b>
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod2"
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        label="日期"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
      >
      </el-table-column>
      <el-table-column
        prop="test"
        label="test"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { dataMethod } from "../../utils";
export default {
  name: "mergeTableCeils",
  data() {
    return {
      tableData: [],
      spanObj: {},
      spanObj2: {},
    };
  },
  created() {
    this.tableData = [
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
        test: 1,
      },
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1517 弄",
        test: 1,
      },
      {
        date: "2016-05-01",
        name: "王小",
        address: "上海市普陀区金沙江路 1519 弄",
        test: 1,
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄",
        test: 1,
      },
      {
        date: "2016-05-03",
        name: "王小",
        address: "上海市普陀区金沙江路 1516 弄",
        test: 1,
      },
    ];
    //动态渲染 请渲染数剧结束后在执行此方法
    this.spanObj = dataMethod(this.tableData);
    this.spanObj2 = dataMethod(this.tableData, ['date', 'name', 'test'], 'name');
  },
  methods: {
    objectSpanMethod({ column, rowIndex }) {
      //列合并
      let _row = this.spanObj[column.property]
        ? this.spanObj[column.property][rowIndex]
        : 1;
      let _col = _row > 0 ? 1 : 0;
      return {
        rowspan: _row,
        colspan: _col,
      };
    },
    objectSpanMethod2({ column, rowIndex }) {
      //列合并
      let _row = this.spanObj2[column.property]
        ? this.spanObj2[column.property][rowIndex]
        : 1;
      let _col = _row > 0 ? 1 : 0;
      return {
        rowspan: _row,
        colspan: _col,
      };
    },
  },
};
</script>

<style>
.line {
  height: 1px;
  background: #ccc;
  margin: 50px 0;
}
</style>