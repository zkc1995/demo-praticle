<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
      <el-menu-item index="/lazy-load-charts">图表懒加载</el-menu-item>
      <el-menu-item index="/merge-table-ceils">合并单元格</el-menu-item>
    </el-menu>
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '/lazy-load-charts'
    }
  },
  watch: {
    '$router.path'(newval) {
      this.activeIndex = newval 
    }
  }
}
</script>

<style>
</style>
