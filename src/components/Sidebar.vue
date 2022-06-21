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
          <el-menu-item @click="clickChange('边界法测试',1,0)">边界法</el-menu-item>
          <el-menu-item @click="clickChange('等价类方法',1,1)">等价类方法</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-reading"></i>
          <span slot="title">万年历问题</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-reading"></i>
          <span slot="title">电脑销售问题</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="clickChange('边界法测试',3,0)">边界法</el-menu-item>
          <el-menu-item @click="clickChange('等价类方法',3,1)">等价类方法</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import {data1} from '../assets/data/data1'
import {data2} from '../assets/data/data2'
import axios from "_axios@0.27.2@axios";

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
      // if(data==='边界法测试'){
      //   getTableData()
      //   this.$store.commit('saveTableTitle',data1.tableTitle)
      //   this.$store.commit('saveTableData',data1.tableData)
      //   console.log(data1)
      // }
      // else {
      //   this.$store.commit('saveTableTitle',data2.tableTitle)
      //   this.$store.commit('saveTableData',data2.tableData)
      //   console.log(data2)
      // }
      this.$store.commit('saveHide', false)
      console.log(("加载动画"))
      if (id === 1) {
        this.$store.commit('saveTableTitle', data1.tableTitle)
        this.$store.commit('saveTableData', data1.tableData)
        console.log(data1)
      } else if (id === 2) {
        this.$store.commit('saveTableTitle', data2.tableTitle)
        this.$store.commit('saveTableData', data2.tableData)
        console.log(data2)
      } else if (id === 3) {
        //为给定的ID的user创建请求
        await axios.post("http://124.70.167.135:5001/computer/case/list", {
          test_technique: test_technique
        })
          .then(function (response) {
            // console.info(response.data.data)//这里面是拿到的数据
            if (response.data.data === []) {

            } else {
              let keys = Object.keys(response.data.data[0]);
              // console.log(keys)
              that.$store.commit('saveTableTitle', keys)
              that.$store.commit('saveTableData',response.data.data )
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
