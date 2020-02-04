import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from '@/page/index/template.vue'
// import Create from '@/page/create/template.vue'
// import Detail from '@/page/detail/template.vue'
// import Edit from '@/page/edit/template.vue'
// import Login from '@/page/login/template.vue'
// import My from '@/page/my/template.vue'
// import Register from '@/page/register/template.vue'
// import User from '@/page/user/template.vue'

import store from '../store'
window.store = store
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('@/page/index/template.vue')
    },
    {
      path: '/create',
      component: () => import('@/page/create/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/detail/:blogId',
      component: () => import('@/page/detail/template.vue'),
      meta: { requiresAuth: true }

    },
    {
      path: '/edit/:blogId',
      component: () => import('@/page/edit/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      component: () => import('@/page/login/template.vue'),
     
    },
    {
      path: '/register',
      component: () => import('@/page/register/template.vue'),
      
    },
    {
      path: '/my',
      component: () => import('@/page/my/template.vue'),
      meta: { requiresAuth: true }
    },

    {
      path: '/user/:userId',
      component: () => import('@/page/user/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '*',
      component: () => import('@/page/index/template.vue')
    }

  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin=>{
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }    
    })
  } else {
    next() // 确保一定要调用 next()
  }
})



export default router
