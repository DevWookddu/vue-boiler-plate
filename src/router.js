import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "HelloVue" */'./views/HelloVue'),
    },
  ],
})

export default router
