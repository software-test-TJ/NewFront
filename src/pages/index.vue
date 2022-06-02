<template>
  <div id="container">
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
export default {
  name: "index",
  data() {
    return {
      title: "",
    };
  },
  components: {
    TestTable,
    TestTitle,
    Sidebar,
    HistoryTable
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
