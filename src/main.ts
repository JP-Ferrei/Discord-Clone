import Vue from 'vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import Home from './views/Home.vue'
import '@/assets/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(Home)
}).$mount('#app')
