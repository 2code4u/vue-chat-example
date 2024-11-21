import Vue from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import vuetify from './plugins/vuetify'
import api from '@api'

Vue.config.productionTip = false
Vue.prototype.$api = api

Vue.use(api)
Vue.use(pinia)

new Vue({
  router,
  pinia,
  vuetify,
  render: h => h(App)
}).$mount('#app')
