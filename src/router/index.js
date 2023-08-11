import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/home.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})
