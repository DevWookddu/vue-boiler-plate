import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloVue from './views/HelloVue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HelloVue,
    },
  ],
})

export default router
