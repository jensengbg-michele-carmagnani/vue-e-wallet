import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/AddCard',
    name: 'AddCard',
    component:()  => import('@/views/AddCard')
  },
 
]

const router = new VueRouter({
  routes
})

export default router
