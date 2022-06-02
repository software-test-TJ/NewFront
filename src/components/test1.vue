<template>
<div>{{test1}}</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "test1",
  data(){
    return {
    }
  },
  computed: {
    ...mapState(['test1']),
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
