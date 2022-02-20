import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/dashboard/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        // Route level code-splitting
        // This generates a separate chunk (about.[hash].js) for this route
        // Which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "forbidden" */ '../views/dashboard/Home.vue'),
        meta: { requiresAuth: true },
      },
    ]
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
