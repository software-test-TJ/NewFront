<template>
  <div id="container">
    <el-col :span="4">
      <Sidebar></Sidebar>
    </el-col>
    <el-col :span="20">
      <h3>状态图：</h3>
      <img src="../assets/atm1.png" alt="">
      <h3>完善:</h3>
      <img src="../assets/atm2.svg" alt="">
    </el-col>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";

export default {
  name: "AtmState",
  components: {
    Sidebar,
  },

}
</script>

<style scoped>

</style>
