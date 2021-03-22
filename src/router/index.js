import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Product from '@/pages/Product'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
  ]
})
