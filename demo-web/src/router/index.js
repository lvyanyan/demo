import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import HOME from '@/views/home'
import AddFriend from '@/components/addFriend'
import Search from '@/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: '登录',
      component: Login
    },
    {
      path: '/',
      name: '主页',
      component: HOME
    },
    {
      path:'/home/search',
      name:"搜索",
      component:Search
    },
    {
      path:'/home/addFriend',
      name:'添加好友',
      component:AddFriend
    }
  ]
})
