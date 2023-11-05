import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { path: "/", component: () => import ("../views/home.vue") },
  { path: "/itens", component: () => import ("../views/itens.vue") },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


/*
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeLogin
    },
    {
      path: '/itens',
      name: 'itens',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/itens.vue')
    }
  ]
})

export default router
*/