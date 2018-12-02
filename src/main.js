import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTouch from 'vue-touch'

let connection = new WebSocket('ws://zackmattor.com:8081');
console.log('connecting');

// Configure Vue instance
Vue.prototype['$connection'] = connection;
Vue.use(VueTouch, {name: 'v-touch'})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
