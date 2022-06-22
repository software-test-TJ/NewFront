<template>
  <div id="container">
    <el-col :span="4">
      <Sidebar></Sidebar>
    </el-col>
    <el-col :span="20">
      <h3>基本状态转移图：</h3>
      <img src="../assets/atm3.svg" alt="">
      <h3>考虑健壮性的状态转移图:</h3>
      <img src="../assets/atm4.svg" style="" alt="">
    </el-col>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";

export default {
  name: "AtmTran",
  components: {
    Sidebar,
  },

}
</script>

<style scoped>

</style>
