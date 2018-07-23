import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import api from '../src/api/api'
import './tools/axiosHttp'

Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
