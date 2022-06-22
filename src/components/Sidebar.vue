<template>
  <div id="sidebar">

    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu :collapse="isCollapse" :default-active="this.$route.path" class="el-menu-vertical-demo" default-active="1-4-1"
             router @close="handleClose" @open="handleOpen">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-reading"></i>
          <span slot="title">三角形问题</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/" @click="clickChange('边界法测试',1,0)">边界值方法</el-menu-item>
          <el-menu-item index="/" @click="clickChange('等价类方法',1,1)">等价类方法</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-reading"></i>
          <span slot="title">万年历问题</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/" @click="clickChange('边界法测试',2,0)">边界值方法</el-menu-item>
          <el-menu-item index="/" @click="clickChange('等价类方法',2,1)">等价类方法</el-menu-item>
          <el-menu-item index="/" @click="clickChange('决策表',2,2)">决策表方法</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-reading"></i>
          <span slot="title">电脑销售系统</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/" @click="clickChange('边界法测试',3,0)">边界值方法</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-reading"></i>
          <span slot="title">电信收费问题</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/" @click="clickChange('边界值方法',4,0)">边界值方法</el-menu-item>
          <el-menu-item index="/" @click="clickChange('等价类方法',4,1)">等价类方法</el-menu-item>
          <el-menu-item index="/" @click="clickChange('决策表方法',4,2)">决策表方法</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-reading"></i>
          <span slot="title">ATM问题</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="AtmState">状态图</el-menu-item>
          <el-menu-item index="AtmTran">基本状态转移图</el-menu-item>
          <el-menu-item index="AtmCase">逻辑测试用例</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-reading"></i>
          <span slot="title">白盒测试问题</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/" @click="clickChange('边界值方法',6,1)">语句覆盖</el-menu-item>
          <el-menu-item index="/" @click="clickChange('等价类方法',6,2)">判定覆盖</el-menu-item>
          <el-menu-item index="/" @click="clickChange('决策表方法',6,3)">条件覆盖</el-menu-item>
          <el-menu-item index="/" @click="clickChange('边界值方法',6,4)">判定条件覆盖</el-menu-item>
          <el-menu-item index="/" @click="clickChange('等价类方法',6,5)">条件组合覆盖</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-reading"></i>
          <span slot="title">web系统</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="web">正交实验法</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-reading"></i>
          <span slot="title">程序图</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="program">控制流图法</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
import axios from "_axios@0.27.2@axios";
import tableExchange from "../assets/data/tableExchange";
export default {
  name: "sidebar",
  data() {
    return {
      isCollapse: false,
      case:null
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    async clickChange(data, id, test_technique) {
      let that=this
      this.$store.commit('saveSideBarTitle', data)
      this.$store.commit('saveId', id)
      this.$store.commit('saveHide', false)
      console.log(("加载动画"))
      if (id === 1) {
        //为给定的ID的user创建请求
        await axios.post("http://124.70.167.135:5001/triangle/case/list", {
          test_technique: test_technique
        })
          .then(function (response) {
            // console.info(response.data.data)//这里面是拿到的数据
            if (response.data.data === []) {

            } else {
              let table=tableExchange(response.data.data)
              let keys = Object.keys(table[0]);
              that.$store.commit('saveTableTitle', keys)
              that.$store.commit('saveTableData', table)
            }
          })
          .catch(function (error) {
            // console.info(error)
          })
        //获取历史的列表
        axios.post("http://124.70.167.135:5001/triangle/history/list")
          .then(function (response) {
            // console.info(response.data.data)//这里面是拿到的数据
            if (response.data.data === []) {
            } else {
              // let keys = Object.keys(response.data.data[0]);
              // console.log(keys)
              that.$store.commit('saveHistoryTableData',response.data.data )
              // this.$store.state.historyTableData
              console.log(response.data.data)
            }
          })
          .catch(function (error) {
            // console.info(error)
          })
        this.$store.commit('saveHide', true)

      }
      else if (id === 2) {
        //为给定的ID的user创建请求
        await axios.post("http://124.70.167.135:5001/calendar/case/list", {
          test_technique: test_technique
        })
          .then(function (response) {
            // console.info(response.data.data)//这里面是拿到的数据
            if (response.data.data === []) {

            } else {
              let table=tableExchange(response.data.data)
              let keys = Object.keys(table[0]);
              that.$store.commit('saveTableTitle', keys)
              that.$store.commit('saveTableData', table)
            }
          })
          .catch(function (error) {
            // console.info(error)
          })
        //获取历史的列表
        axios.post("http://124.70.167.135:5001/calendar/history/list")
          .then(function (response) {
            // console.info(response.data.data)//这里面是拿到的数据
            if (response.data.data === []) {
            } else {
              // let keys = Object.keys(response.data.data[0]);
              // console.log(keys)
              that.$store.commit('saveHistoryTableData',response.data.data )
              // this.$store.state.historyTableData
              console.log(response.data.data)
            }
          })
          .catch(function (error) {
            // console.info(error)
          })
        this.$store.commit('saveHide', true)
      }
      else if (id === 3) {
        //为给定的ID的user创建请求
        await axios.post("http://124.70.167.135:5001/computer/case/list", {
          test_technique: test_technique
        })
          .then(function (response) {
            // console.info(response.data.data)//这里面是拿到的数据
            if (response.data.data === []) {

            } else {
              let table=tableExchange(response.data.data)
              let keys = Object.keys(table[0]);
              that.$store.commit('saveTableTitle', keys)
              that.$store.commit('saveTableData', table)
            }
          })
          .catch(function (error) {
            // console.info(error)
          })
        //获取历史的列表
        axios.post("http://124.70.167.135:5001/computer/history/list")
          .then(function (response) {
            // console.info(response.data.data)//这里面是拿到的数据
            if (response.data.data === []) {
            } else {
              // let keys = Object.keys(response.data.data[0]);
              // console.log(keys)
              that.$store.commit('saveHistoryTableData',response.data.data )
              // this.$store.state.historyTableData
              console.log(response.data.data)
            }
          })
          .catch(function (error) {
            // console.info(error)
          })
        this.$store.commit('saveHide', true)
      }
      else if (id === 4) {
        //为给定的ID的user创建请求
        await axios.post("http://124.70.167.135:5001/phone/case/list", {
          test_technique: test_technique
        })
          .then(function (response) {
            // console.info(response.data.data)//这里面是拿到的数据
            if (response.data.data === []) {

            } else {
              let table=tableExchange(response.data.data)
              let keys = Object.keys(table[0]);
              that.$store.commit('saveTableTitle', keys)
              that.$store.commit('saveTableData', table)
            }
          })
          .catch(function (error) {
            // console.info(error)
          })
        //获取历史的列表
        axios.post("http://124.70.167.135:5001/phone/history/list")
          .then(function (response) {
            // console.info(response.data.data)//这里面是拿到的数据
            if (response.data.data === []) {
            } else {
              // let keys = Object.keys(response.data.data[0]);
              // console.log(keys)
              that.$store.commit('saveHistoryTableData',response.data.data )
              // this.$store.state.historyTableData
              console.log(response.data.data)
            }
          })
          .catch(function (error) {
            // console.info(error)
          })
        this.$store.commit('saveHide', true)
      }
      else if (id === 6) {
        //为给定的ID的user创建请求
        await axios.post("http://124.70.167.135:5001/commission/case/list", {
          test_technique: test_technique
        })
          .then(function (response) {
            // console.info(response.data.data)//这里面是拿到的数据
            if (response.data.data === []) {

            } else {
              let table=tableExchange(response.data.data)
              let keys = Object.keys(table[0]);
              that.$store.commit('saveTableTitle', keys)
              that.$store.commit('saveTableData', table)
            }
          })
          .catch(function (error) {
            // console.info(error)
          })
        //获取历史的列表
        axios.post("http://124.70.167.135:5001/commission/history/list")
          .then(function (response) {
            // console.info(response.data.data)//这里面是拿到的数据
            if (response.data.data === []) {
            } else {
              // let keys = Object.keys(response.data.data[0]);
              // console.log(keys)
              that.$store.commit('saveHistoryTableData',response.data.data )
              // this.$store.state.historyTableData
              console.log(response.data.data)
            }
          })
          .catch(function (error) {
            // console.info(error)
          })
        this.$store.commit('saveHide', true)
      }
    }
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
