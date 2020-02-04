import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import './assets/scss/App'

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
