<template>
  <div id="caseShow">
    <h5>测试用例表</h5>
    <el-table
      ref="multipleTable"
      :data="tableData"
      style="width: 100%"
      height="200"
      tooltip-effect="dark"
      @selection-change="handleSelectionChange"
    >
<!--      表格的title-->
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        :label="tableTitle[0]"
        width="120"
        :property="tableTitle[0]"
      ></el-table-column>
      <el-table-column
        :label="tableTitle[1]"
        width="120"
        :property="tableTitle[1]"
      ></el-table-column>
      <el-table-column
        :label="tableTitle[2]"
        width="120"
        :property="tableTitle[2]"
      ></el-table-column>
      <el-table-column
        :label="tableTitle[3]"
        width="120"
        :property="tableTitle[3]"
      ></el-table-column>
      <el-table-column
        :label="tableTitle[4]"
        width="120"
        :property="tableTitle[4]"
      ></el-table-column>
      <el-table-column
        :label="tableTitle[5]"
        width="120"
        :property="tableTitle[5]"
      ></el-table-column>
      <el-table-column
        :label="tableTitle[6]"
        width="120"
        :property="tableTitle[6]"
      ></el-table-column>
      <el-table-column
        :label="tableTitle[7]"
        width="120"
        :property="tableTitle[7]"
      ></el-table-column>
      <el-table-column
        :label="tableTitle[8]"
        width="120"
        :property="tableTitle[8]"
      ></el-table-column>
      <el-table-column
        :label="tableTitle[9]"
        width="120"
        :property="tableTitle[9]"
      ></el-table-column>
      <el-table-column
        :label="tableTitle[10]"
        width="120"
        :property="tableTitle[10]"
      ></el-table-column>
      <el-table-column
        :label="tableTitle[11]"
        width="120"
        :property="tableTitle[11]"
      ></el-table-column>
      <el-table-column
        :label="tableTitle[12]"
        width="120"
        :property="tableTitle[12]"
      ></el-table-column>
      <el-table-column
        :label="tableTitle[13]"
        width="120"
        :property="tableTitle[13]"
      ></el-table-column>

    </el-table>

    <div style="margin-top: 20px">
      <el-col :span="6">
        <el-select v-model="value" placeholder="接口版本">
          <el-option
            v-for="item in version_options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-button @click="toggleSelection()">取消选择</el-button>
      <el-button type="primary" @click="submitToResult()">提交</el-button>
    </div>
    <el-divider></el-divider>
    <el-divider></el-divider>
    <el-divider></el-divider>
  </div>
</template>

<script>
import {mapState} from "_vuex@3.6.2@vuex";

export default {
  name: "TestTable",
  data() {
    return {
      multipleSelection: [],
      version_options: [{
        value: '1',
        label: '1.0'
      }, {
        value: '2',
        label: '2.0'
      }],
      value: '',
    }
  },
  computed: {
    ...mapState(['tableTitle']),
    ...mapState(['tableData']),
    ...mapState(['id']),
  },
  watch: {
    DbSource(currVal) {
      this.currVal = currVal;
    }
  },
  methods: {
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
    submitToResult(){
      let pass=true
      if(this.$data.value===''){
        pass=false
      }
      if(this.$data.multipleSelection.length===0){
        pass=false
      }
      if(!pass){
        this.$message({
          type: 'warning',
          message: '请选择输入版本信息或者选取用例'
        })
      }
      else {
        let cases=[]
        for (let i = 0; i <this.$data.multipleSelection.length ; i++) {
          cases.push(this.$data.multipleSelection[i]["id"])
        }
        console.log("测试选择")
        console.log(cases)
        this.$router.push({name:"result",params:{
            'version_value':this.$data.value,
            'multipleSelection':cases,
            'id':this.$store.state.id
          }})
      }
    }
  }
}
</script>

<style scoped>

</style>
