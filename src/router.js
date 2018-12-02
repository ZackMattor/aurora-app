import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import IotBookshelf from '@/components/iot_bookshelf'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/iot-bookshelf',
      name: 'iot-bookshelf',
      component: IotBookshelf
    }
  ]
})
