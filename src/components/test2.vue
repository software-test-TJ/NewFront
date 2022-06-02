<template>
  <div>
{{test2}}
    <el-button @click="click"></el-button>


    <div v-for="index of num+1" :key='index'>
      <div v-if="index===1">special{{tableTitle[index-1]}}</div>
      <div v-else>{{tableTitle[index-1]}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "test2",
  data(){
    return {
      num:3,
      tableTitle:this.$store.state.tableTitle,
      tableData:this.$store.state.tableData,
      test2:'test2'
    }
  },
  methods:{
    click(){
      // 点击按钮进行一些操作，然后保存数据
      console.log('click')
      this.$store.commit('saveTest1','6666')
      console.log(this.$store.state.test1)

    }
  }
}
</script>

<style scoped>

</style>
