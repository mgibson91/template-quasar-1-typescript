export default [
  {
    path: '/',
    component: () => import('layouts/default.vue'),
    children: [
      // { path: '', component: () => import('pages/index.vue') },
      {
        path: '/home',
        component: () => import('pages/home.vue'),
      },
    ],
  },

  {
    path: '/',
    component: () => import('pages/landing.vue'),
  },


  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404'),
  },
];
