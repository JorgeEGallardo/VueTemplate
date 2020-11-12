import Vue from 'vue'
import App from './App'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify,
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
