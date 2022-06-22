<template>
  <div>
  <el-table
    :data="historyTableData"
    height="200"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="200">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.start_time }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="id"
      width="180"
      prop="id"
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
    <el-dialog title="详细信息" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="accept" label="accept"></el-table-column>
        <el-table-column property="actual_output" label="actual_output"></el-table-column>
        <el-table-column property="case_id" label="case_id"></el-table-column>
        <el-table-column property="expected_output" label="expected_output"></el-table-column>
        <el-table-column property="history_id" label="history_id"></el-table-column>
        <el-table-column property="test_time" label="test_time"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import {mapState} from "_vuex@3.6.2@vuex";
import axios from "_axios@0.27.2@axios";

export default {
  name: "HistoryTable",
  data() {
    return {
      //数据
      gridData: [],
      dialogTableVisible: false,
    }
  },
  methods: {
    async handleEdit(index, row) {
      let that=this
      let id=parseInt(this.$store.state.id)
      if(id===3)
      {
        await axios.post("http://124.70.167.135:5001/computer/history/detail", {
          history_id: row["id"]
        })
          .then(function (response) {
            // console.info(response.data.data)//这里面是拿到的数据
            if (response.data.data.length===0) {
              that.$alert('历史信息为空',
                '详细信息', {
                  dangerouslyUseHTMLString: true
                });
            } else {
              that.gridData=response.data.data
              that.dialogTableVisible = true
            }
          })
          .catch(function (error) {
            // console.info(error)
          })
      }
      else if(id===1){
        await axios.post("http://124.70.167.135:5001/triangle/history/detail", {
          history_id: row["id"]
        })
          .then(function (response) {
            // console.info(response.data.data)//这里面是拿到的数据
            if (response.data.data.length===0) {
              that.$alert('历史信息为空',
                '详细信息', {
                  dangerouslyUseHTMLString: true
                });
            } else {
              that.gridData=response.data.data
              that.dialogTableVisible = true
            }
          })
          .catch(function (error) {
            // console.info(error)
          })
      }
      else if(id===2){
        await axios.post("http://124.70.167.135:5001/calendar/history/detail", {
          history_id: row["id"]
        })
          .then(function (response) {
            // console.info(response.data.data)//这里面是拿到的数据
            if (response.data.data.length===0) {
              that.$alert('历史信息为空',
                '详细信息', {
                  dangerouslyUseHTMLString: true
                });
            } else {
              that.gridData=response.data.data
              that.dialogTableVisible = true
            }
          })
          .catch(function (error) {
            // console.info(error)
          })
      }
      else if(id===4){
        await axios.post("http://124.70.167.135:5001/phone/history/detail", {
          history_id: row["id"]
        })
          .then(function (response) {
            // console.info(response.data.data)//这里面是拿到的数据
            if (response.data.data.length===0) {
              that.$alert('历史信息为空',
                '详细信息', {
                  dangerouslyUseHTMLString: true
                });
            } else {
              that.gridData=response.data.data
              that.dialogTableVisible = true
            }
          })
          .catch(function (error) {
            // console.info(error)
          })
      }
      else {
        await axios.post("http://124.70.167.135:5001/commission/history/detail", {
          history_id: row["id"]
        })
          .then(function (response) {
            // console.info(response.data.data)//这里面是拿到的数据
            if (response.data.data.length===0) {
              that.$alert('历史信息为空',
                '详细信息', {
                  dangerouslyUseHTMLString: true
                });
            } else {
              that.gridData=response.data.data
              that.dialogTableVisible = true
            }
          })
          .catch(function (error) {
            // console.info(error)
          })
      }
      console.log(row["id"]);

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
