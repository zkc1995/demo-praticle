<template>
  <div>
    <chartsComponent v-for="i in 50" :index="i" :key="i"/>
  </div>
</template>

<script>
import chartsComponent from './components/charts.vue'
export default {
  name: 'lazyLoadCharts',
  components: { chartsComponent }
}
</script>