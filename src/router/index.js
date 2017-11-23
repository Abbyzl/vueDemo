import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Home from '@/views/Home'
import List from '@/views/List'
import Tasks from '@/views/Tasks'
import User from '@/views/User'
import More from '@/views/More'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },{
      path: '/list',
      name: 'List',
      component: List
    },{
      path: '/tasks',
      name: 'Tasks',
      component: Tasks
    },{
      path: '/user',
      name: 'User',
      component: User
    },{
      path: '/more',
      name: 'More',
      component: More
    },
    // {
    //   path: '/HelloAbby',
    //   name: 'HelloAbby',
    //   component: HelloAbby
    // },{
    //   path: '/HelloWorld/:id',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
