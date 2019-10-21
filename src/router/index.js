import Vue from 'vue'
import Router from 'vue-router'
import axios from "axios";
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import film from '@/components/film'
import book from '@/components/book'
import broadcast from '@/components/broadcast'
import group from '@/components/group'
import skipopen from '@/components/skipopen'
import Moviedetails from '@/components/film/Moviedetails'
import douList from '@/components/film/douList'

Vue.use(Router)
Vue.prototype.$http = axios
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[
        {
          path: '/film',
          name: 'film',
          component: film,
        },
        {
          path: '/book',
          name: 'book',
          component: book,
        },
        {
          path: '/broadcast',
          name: 'broadcast',
          component: broadcast,
        },
        {
          path: '/group',
          name: 'group',
          component: group,
        },
        {
          path:'/',
          component:film
        },
        {
          path:'/Moviedetails',
          component:Moviedetails
        }
      ]
    },
    {
      path:'/skipopen',
      component:skipopen
    },
    {
      path:'/douList',
      component:douList
    }
  ]
})
