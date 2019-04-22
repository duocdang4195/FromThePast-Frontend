import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import './plugins/vuetify';
import './plugins/vue-moment';
// import './plugins/vue-typer';
// import './plugins/vue-bootstrap'
// import './plugins/v-tooltip'
// import 'bulma/css/bulma.css'
import 'vuetify/dist/vuetify.min.css'
require('vue2-animate/dist/vue2-animate.min.css')

import interceptorsSetup from './ultils/interceptorsSetup.js';

Vue.config.productionTip = false

interceptorsSetup();
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
