
import Vue from 'vue'

import App from './App.vue'
import router from './router'

import * as serverConfig from '@/config/server'
import Server from './utils/cloud-server'
import Message from './utils/message'

import './core/lazy_use'


import './utils/filter' // global filter


Vue.config.productionTip = false

Vue.use(Server, serverConfig)
Vue.use(Message)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
