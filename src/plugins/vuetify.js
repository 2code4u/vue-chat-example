import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import ru from 'vuetify/lib/locale/ru'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { ru },
    current: 'ru',
  },
  theme: {
    themes: {
      light: {
        primary: '#4272cf',
        secondary: '#603333',
        accent: '#58B873',
        error: '#FFD5D6'
      }
    }
  }
})
