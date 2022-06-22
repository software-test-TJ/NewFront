<template>
<div>
  <div id="main"></div>
</div>
</template>

<script>
import * as echarts from 'echarts';
import {mapState} from "_vuex@3.6.2@vuex";
export default {
  name: "Draw",
  data(){
    return {
    }
  },
  methods:{
    draw(){

      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: this.$store.state.resultShowTable
          }
        ]
      }
      option && myChart.setOption(option);
    }
  },
  mounted() {
    this.draw()
  },
  computed: {
    ...mapState(['resultShowTable'])
  },
  watch: {
    DbSource(currVal) {
      this.currVal = currVal;
      console.log("安徽傻瓜蛋哈工大骄傲是")
    }
  },
}
</script>

<style scoped>
#main {
  margin-top: 5px;
  width: 700px;
  height: 700px;
}
</style>
