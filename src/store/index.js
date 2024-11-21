import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import api from '@api'

Vue.use(PiniaVuePlugin)

const Store = createPinia()

Store.use(({ store }) => {
  store.$api = api
})

export default Store
