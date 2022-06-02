<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="执行者"
      width="180"
      prop="name"

    >
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">查看详细信息</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {mapState} from "_vuex@3.6.2@vuex";

export default {
  name: "HistoryTable",
  data() {
    return {
      //数据
      tableData: this.$store.state.historyTableData
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  computed: {
    ...mapState(['historyTableData']),
    ...mapState(['id']),
  },
  watch: {
    DbSource(currVal) {
      this.currVal = currVal;
    }
  }
}
</script>

<style scoped>

</style>
