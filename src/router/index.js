import Vue from 'vue'
import VueRouter from 'vue-router'

import Inicio from '../views/Inicio.vue'
import SobreMi from '../views/SobreMi.vue'
import Contacto from '../views/Contacto.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/inicio'
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/sobremi',
    name: 'SobreMi',
    component: SobreMi
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/post',
    name: 'Post',
    component: () =>
      import(/* webpackChunkName: "Entrada" */ '../views/Post.vue'),
    children: [
      {
        path: ':Articulo',
        name: 'Articulo',
        component: () =>
          import(/* webpackChunkName: "Articulo" */ '../views/Articulo.vue')
      }
    ]
  },
  {
    path: '*',
    component: () =>
      import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
