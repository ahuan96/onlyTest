import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入css
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/stylesheets/style.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
