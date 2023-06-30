<template>
  <div ref="bar" style="width: 450px; height: 300px; display: inline-block;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'BarChart',
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isIntersecting: false,
      seriesTypes: ['scatter', 'bar', 'line'],
      seriesColor: ['#61A5E8', '#7ECF51', '#EECB5F', '#E3935D', '#E16757', '#56D0A3']
    }
  },
  mounted() {
    // this.drawChart()
    
    const observe = new IntersectionObserver(([{isIntersecting}]) => {
        if(isIntersecting) {
          observe.unobserve(this.$refs.bar)
          this.drawChart()
        }
      }, {
        threshold: [0]
      })
    observe.observe(this.$refs.bar)
  },
  methods: {
    drawChart() {
      let myChart = echarts.init(this.$refs.bar)
      let option = {
        title: {
          text: 'test'
        },
        tooltip: {},
        legend: {
          data: ['销量'],
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋']
        },
        yAxis: {},
        series: {
          name: '销量',
          type: 'bar',
          data: [5, 30, 36, 10, 10, 20]
        }
      }
      const index = Math.round(Math.random()*2)
      const colorIndex = Math.floor(Math.random()*6)
      option.series.type = this.seriesTypes[index]
      option.series.color = this.seriesColor[colorIndex]
      myChart.setOption(option)
    }
  }
}
</script>

<style>
</style>
