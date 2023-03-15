<template>
  <div id="app">
    <div>
      <chartsComponent v-for="i in 50" :index="i" :key="i"/>
    </div>
  </div>
</template>

<script>
import chartsComponent from './components/charts.vue'
export default {
  name: 'App',
  components: {chartsComponent},
  
  beforeCreate() {
    console.log('创建', new Date())
  },
}
</script>

<style>
</style>
