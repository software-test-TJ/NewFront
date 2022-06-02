<template>
  <div>
<!--<Triangle></Triangle>-->
    <TestResult></TestResult>
</div>
</template>

<script>
import TestResult from "../components/TestResult";
import Test from "./test";
export default {
  name: "result",
  components:{
    Test,
    TestResult
  }
}
</script>

<style scoped>

</style>
