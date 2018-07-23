import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login.vue'
import Users from '../views/users.vue'
import Info from '../views/users/info.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/users',
      name: 'users',
      component: Users,
      children:[{
        path: 'Info',
        name: 'info',
        component: Info
      }]
    }
  ]
})
