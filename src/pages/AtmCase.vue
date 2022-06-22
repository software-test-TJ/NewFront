<template>
  <div id="container">
    <el-col :span="4">
      <Sidebar></Sidebar>
    </el-col>
    <el-col :span="16" :offset="2">
      <p>下面用序号简化表示逻辑测试用例（序号和状态转移图中的对应）</p>
      <p> 1，（4~11、13）      </p>
      <p> 1，2      </p>
      <p> 1，2，（2~13）      </p>
      <p> 1，3，（2~3、5、12、13）      </p>
      <p>  1，3，4      </p>
      <p> 1，3，11，5      </p>
      <p> 1，3，11，（2~4、6~13）      </p>
      <p> 1，3，11，5      </p>
      <p>  1，3，10，（3~4，6~11、13）      </p>
      <p> 1，3，10，12      </p>
      <p> 1，3，10，2      </p>
      <p> 1，3，10，5      </p>
      <p> 1，3，9，12      </p>
      <p>  1，3，9，2      </p>
      <p>  1，3，9，5      </p>
      <p>  1，3，9，（3~4、6~11、13）      </p>
      <p>  1，3，8，13      </p>
      <p> 1，3，8，12      </p>
      <p>  1，3，8，2      </p>
      <p> 1，3，8，5      </p>
      <p> 1，3，8，（3~4，6~11）      </p>
      <p>1，3，7，（3~4、6~11、13）      </p>
      <p>  1，3，7，12      </p>
      <p> 1，3，7，2      </p>
      <p> 1，3，7，5      </p>
      <p>  1，3，6，5      </p>
      <p> 1，3，6，（2~4、6~13）
      </p>
    </el-col>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";

export default {
  name: "AtmCase",
  components: {
    Sidebar,
  },

}
</script>

<style scoped>

</style>
