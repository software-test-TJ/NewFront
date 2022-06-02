<template>
  <div id="title">
    <div>
      <h3>{{ sideBarTitle }}</h3>
      <el-divider></el-divider>
    </div>

  </div>
</template>


<script>
import {mapState} from "_vuex@3.6.2@vuex";

export default {
  name: "TestTitle",
  computed: {
    ...mapState(['sideBarTitle']),
  },
  watch: {
    DbSource(currVal) {
      this.currVal = currVal;
    }
  }
}
</script>

<style scoped>

</style>
