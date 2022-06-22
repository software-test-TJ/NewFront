<template>
  <div id="container">
    <el-col :span="4">
      <Sidebar></Sidebar>
    </el-col>
    <el-col :span="20">
      <h3>程序图（控制流图）:</h3>
      <img src="../assets/program.svg" style="" alt="">
    </el-col>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";

export default {
  name: "program",
  components: {
    Sidebar,
  },

}
</script>

<style scoped>

</style>
