<template>
  <div>
    <loading v-if=!hide></loading>
    <TestResult></TestResult>
</div>
</template>

<script>
import TestResult from "../components/TestResult";
export default {
  name: "result",
  components:{
    TestResult
  },
  data() {
    return {
      title: "",
      hide:this.$store.state.hide
    };
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
