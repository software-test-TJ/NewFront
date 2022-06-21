<template>
  <div id="container">
    <loading v-if=!hide></loading>
    <el-col :span="4">
      <Sidebar></Sidebar>
    </el-col>
    <el-col :span="20">
        <TestTitle></TestTitle>
        <TestTable></TestTable>
        <HistoryTable></HistoryTable>
    </el-col>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import TestTitle from "../components/TestTitle";
import TestTable from "../components/TestTable";
import HistoryTable from "../components/HistoryTable";
import {mapState} from "_vuex@3.6.2@vuex";
export default {
  name: "index",
  data() {
    return {
      title: "",
      hide:this.$store.state.hide
    };
  },
  components: {
    TestTable,
    TestTitle,
    Sidebar,
    HistoryTable
  },
  methods: {
  },
  computed: {
    getStoreItem () {
      return this.$store.state.hide
    }
  },
  watch: {
    getStoreItem () {
      this.hide=this.$store.state.hide
    }
  },

}
</script>

<style scoped>
</style>
