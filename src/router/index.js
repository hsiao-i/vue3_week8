import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/HomePage.vue')
      },
      {
        path: 'products',
        component: () => import('../views/ProductsPage.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/ProductPage.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/CartPage.vue')
      },
      {
        path: 'order',
        component: () => import('../views/OrderPage.vue')
      },

      {
        path: 'about',
        component: () => import('../views/AboutUsView.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  },

  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/AdminProducts.vue')
      },
      {
        path: 'coupon',
        component: () => import('../views/AdminCoupon.vue')
      },
      {
        path: 'order',
        component: () => import('../views/OrderView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
