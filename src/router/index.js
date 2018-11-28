import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import travel from '@/views/travel'
import about from '@/views/about'
import blog from '@/views/blog'
import event from '@/views/event'
import contact from '@/views/contact'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: home,
    },
    {
      path: '/blog',
      component: blog
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/event',
      component: event
    },
    {
      path: '/contact',
      component: contact
    },
    {
      path: '/travel',
      component: travel
    }
  ]
})
