import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCity from '../views/AddCity.vue'
import EditCity from '../views/EditCity.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from ,next) => {
      if(localStorage.getItem("token") ) {
        next();
      }
      else next('/login');
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    beforeEnter: (to, from ,next) => {
      if(localStorage.getItem("token") ) {
        next();
      }
      else next('/login');
    },
  },
  {
    path: '/add-city',
    name: 'addCity',
    component: AddCity,
    beforeEnter: (to, from ,next) => {
      if(localStorage.getItem("token") ) {
        next();
      }
      else next('/login');
    },
  },
  {
    path: '/edit-city/:id',
    name: 'editCity',
    component: EditCity,
    beforeEnter: (to, from ,next) => {
      if(localStorage.getItem("token") ) {
        next();
      }
      else next('/login');
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


export default router
