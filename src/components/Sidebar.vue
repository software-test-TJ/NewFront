<template>
  <div id="sidebar">

    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu :collapse="isCollapse" class="el-menu-vertical-demo" default-active="1-4-1" @close="handleClose"
             @open="handleOpen" :default-active="this.$route.path" router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-reading"></i>
          <span slot="title">三角形问题</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="clickChange('边界法测试',1)">边界法</el-menu-item>
          <el-menu-item @click="clickChange('等价类方法',2)">等价类方法</el-menu-item>
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
    </el-menu>
  </div>
</template>

<script>
import {data1} from '../assets/data/data1'
import {data2} from '../assets/data/data2'
import {getTableData} from "../assets/data/getCaseTable";
export default {
  name: "sidebar",
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickChange(data,id) {
      this.$store.commit('saveSideBarTitle',data)
      this.$store.commit('saveId',id)
      if(data==='边界法测试'){
        getTableData()
        this.$store.commit('saveTableTitle',data1.tableTitle)
        this.$store.commit('saveTableData',data1.tableData)
        console.log(data1)
      }
      else {
        this.$store.commit('saveTableTitle',data2.tableTitle)
        this.$store.commit('saveTableData',data2.tableData)
        console.log(data2)
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
