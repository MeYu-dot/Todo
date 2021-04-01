import Vue from 'vue';
import VueRouter from 'vue-router';
import Todo from '../views/Todo.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-oaded when the route is visited.
    component: Login,
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // base: process.env.,
  routes,
});

export default router;
