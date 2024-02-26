// router/index.js
import {createRouter, createWebHistory} from 'vue-router';
import personalData from '../view/personalData.vue';
import dashboard from '../view/dashboard.vue';
import personalDocument from '../view/personalDocument.vue';
import employeeRank from '../view/employeeRank.vue';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/personal-data',
    name: 'personalData',
    component: personalData
  },
  {
    path: '/personal-document',
    name: 'personalDocument',
    component: personalDocument
  },
  {
    path: '/employee-rank',
    name: 'employeeRank',
    component: employeeRank
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
/* export default new Router({
  routes: [
    {
          path: '/',
          name: 'profile',
          component: Default,
    },
    {

    }
    // Add other routes as needed
  ],
}); */
