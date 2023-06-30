<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
      <el-menu-item index="/lazy-load-charts">lazy-load-charts</el-menu-item>
      <el-menu-item index="/table-merge-ceils">table-merge-ceils</el-menu-item>
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
  }
}
</script>

<style>
</style>
