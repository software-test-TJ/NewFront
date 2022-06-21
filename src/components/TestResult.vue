<template>
  <div id="TestResult">
    <div>
      <div margin-bottom="20px">
        <el-row>
          <el-button type="primary" size="small" @click="backToIndex()">返回主页</el-button>
          <el-button type="info" size="small" @click="exportExcel()"
          >导出到本地</el-button
          >
        </el-row>
      </div>
      <el-table
        max-height="300px"
        border
        id="out-table"
        :data="resultList"
        style="width: 90%"
        @selection-change="handleSelectionChange"
        :row-class-name="tableRowClassName"
        highlight-current-row
        @current-change="handleCurrentChange"
      >
        <el-table-column prop="case_id" label="ID" width="40"> </el-table-column>
        <el-table-column prop="history_id" label="history_id" width="100">
        </el-table-column>
        <el-table-column prop="test_time" label="test_time" width="100">
        </el-table-column>
        <el-table-column prop="expected_output" label="预期结果" width="100">
        </el-table-column>
        <el-table-column prop="actual_output" label="实际结果" width="100">
        </el-table-column>
        <el-table-column prop="accept" label="accept" width="50"> </el-table-column>
        <el-table-column prop="test_user" label="测试人员" width="100">
        </el-table-column>
        <el-table-column prop="test_date" label="测试时间" width="100">
        </el-table-column>
        <el-table-column prop="env" label="坏境" width="100"> </el-table-column>
        <el-table-column prop="version" label="版本" width="90">
        </el-table-column>
        <el-table-column prop="status" label="测试状态" width="90">
        </el-table-column>
        <el-table-column label="操作" width="220px">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="danger" size="small"
            >删除</el-button
            >
            <el-button @click="handleClick(scope.row)" type="primary" size="small"
            >修改</el-button
            >
            <el-button @click="handleClick(scope.row)" type="success" size="small"
            >执行</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <div id="main"></div>
    </div>
  </div>
</template>

<script>
// 导出Excle依赖
import FileSaver from "file-saver";
import XLSX from "xlsx";

// Echarts
import * as echarts from "echarts";

import {excuteCases} from "../assets/data/excuteCases";
import {mapState} from "_vuex@3.6.2@vuex";
import axios from "_axios@0.27.2@axios";
export default {
  name: "TestResult",
  data(){
    return {
      version_value:this.$route.params.version_value,
      multipleSelection:this.$route.params.multipleSelection,
      resultList: [],
      currentRow: null,
      checkedData: [],
      onload: false
    }
  },
  async mounted() {
    this.$store.commit('saveHide', false)
    this.draw();
    console.log(this.$route.params)
    let version = this.$route.params.version_value
    let id = parseInt(this.$route.params.id)
    let that = this
    if (id === 3) {
      await axios.post("http://124.70.167.135:5001/computer/" + version, {
        case_id_array: that.$route.params.multipleSelection
      })
        .then(function (response) {
          console.info(response.data.data)//这里面是拿到的数据
          if (response.data.data === []) {

          } else {
            // let keys = Object.keys(response.data.data[0]);
            // console.log(keys)
            console.log( response.data.data)
            that.resultList=response.data.data
            that.$store.commit('saveHide', true)
          }
        })
        .catch(function (error) {
          console.info(error)
        })
    }
    else {
      console.log("id不合法")
    }
  },
  methods: {
    // Echarts画图
    draw() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "边界值分析统计",
        },
        tooltip: {},
        xAxis: {
          data: ["基本", "健壮性", "最坏情况", "健壮最坏"],
        },
        yAxis: {},
        series: [
          {
            name: "测试用例数",
            type: "bar",
            data: [5, 20, 36, 10],
          },
        ],
      });
    },
    // 批量执行
    batchExecute() {
      // 如果需要执行并存入数据库，则只需要传入id即可
      // 如果不需要存入数据库，则需要传整个对象
      console.log(this.checkedData);
    },
    // 批量删除
    batchDelete() {
      console.log(this.checkedData);
    },
    // 导出Excel
    exportExcel() {
      /* 从表生成工作簿对象 */
      // console.log(this.checkedData)
      console.log(document.querySelector("#out-table"));
      let wb = XLSX.utils.table_to_book(document.querySelector("#out-table"));
      /* 获取二进制字符串作为输出 */
      var wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array",
      });
      try {
        FileSaver.saveAs(
          //Blob 对象表示一个不可变、原始数据的类文件对象。
          //Blob 表示的不一定是JavaScript原生格式的数据。
          //File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。
          //返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成。
          new Blob([wbout], { type: "application/octet-stream" }),
          //设置导出文件名称
          "TriangleTest.xlsx"
        );
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      return wbout;
    },
    // 处理单选
    handleCurrentChange(val) {
      console.log(val);
      this.currentRow = val;
    },
    // 给出成功或失败的提示
    tableRowClassName({ row, rowIndex }) {
      if (row.status === 0) {
        // console.log(row)
        return "warning-row";
      } else if (row.status === 1) {
        return "success-row";
      }
      return "";
    },
    // 取消选择
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    // 选中处理
    handleSelectionChange(val) {
      this.multipleSelection = val;
      // val中包含选中的所有数据
      this.checkedData = val;
      // console.log("选中：", this.checkedData)
    },
    backToIndex(){
      this.$router.push({name:'index'})
    }
  },
  created() {
    // 发送获取数据
    fetch("http://localhost:5000/triangle", {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log("data:", res);
        this.triangleList = res.data;
      });
  },
}
</script>

<style scoped>
.el-table .warning-row {
  background: oldlace;
}

.el-row {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 320px;
}

#main {
  margin-top: 5px;
  width: 400px;
  height: 240px;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
