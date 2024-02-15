// router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from 'views/Dashboard.vue';

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    // Add other routes as needed
  ],
});
