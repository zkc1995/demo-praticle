import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/',
    redirect: { path: '/lazy-load-charts'}
  },
  
  {
    path: '/lazy-load-charts',
    component: () => import('@/views/lazyLoadCharts')
  }
]

const createRouter = () => {
  return new VueRouter({
    routes: constantRoutes
  })
}
const router = createRouter()
export default router