import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import './plugins/vuetify';
import 'bulma/css/bulma.css'
import 'vuetify/dist/vuetify.min.css'
import './plugins/vue-bootstrap.js'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')