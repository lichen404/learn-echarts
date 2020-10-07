<template>
  <div>

    <vue-echarts :option="option" :loading="loading"></vue-echarts>
    <button @click="addMore">加载更多</button>

  </div>
</template>
<script>
import VueEcharts from './vue-echarts'

export default {
  components: {VueEcharts},
  data() {
    return {
      loading:false,
      option: {
        title: {
          text: 'bug 数',
          show: true,
          right: 20
        },
        tooltip: {
          show: true
        },
        legend: {
          data: ['bug 数']
        },
        xAxis: {
          data: ["1月", "2月", "3月", "4月", "5月", "6月"]
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          type: 'line',
          data: [5, 20, 36, 10, 10, 20],
          lineStyle: {
            color: 'blue'
          },
          itemStyle: {
            borderWidth: 10,
            borderColor: 'green'
          },
          name: 'bug 数'

        }]
      },
    }

  },
  methods: {
    addMore() {
      if(this.loading){return}
      this.loading = true
      setTimeout(()=>{
        this.option = {
          xAxis: {
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"]
          },
          series: [{
            data: [5, 20, 36, 10, 10, 20, 30]
          }]
        }
        this.loading = false
      },1000)

    }
  }

}
</script>
