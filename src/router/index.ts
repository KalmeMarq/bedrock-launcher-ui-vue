import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import News from '../views/News.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/java',
    name: 'Java',
    component: () => import('../views/Java.vue'),
    redirect: '/java/play',
    children: [
      {
        path: 'play',
        component: () => import('../components/Empty.vue')
      },
      {
        path: 'configurations',
        component: () => import('../components/Empty.vue')
      },
      {
        path: 'skins',
        component: () => import('../components/Empty.vue')
      },
      {
        path: 'patchnotes',
        component: () => import('../components/Empty.vue')
      }
    ]
  },
  {
    path: '/bugrock',
    name: 'Bugrock',
    component: () => import('../views/Bugrock.vue'),
    redirect: '/bugrock/play',
    children: [
      {
        path: 'play',
        component: () => import('../components/Empty.vue')
      },
      {
        path: 'configurations',
        component: () => import('../components/Empty.vue')
      },
      {
        path: 'skins',
        component: () => import('../components/Empty.vue')
      },
      {
        path: 'patchnotes',
        component: () => import('../components/Empty.vue')
      }
    ]
  },
  {
    path: '/dungeons',
    name: 'Dungeons',
    component: () => import('../views/Dungeons.vue'),
    redirect: '/dungeons/play',
    children: [
      {
        path: 'play',
        component: () => import('../components/Empty.vue')
      },
      {
        path: 'dlc',
        component: () => import('../components/Empty.vue')
      },
      {
        path: 'faq',
        component: () => import('../components/Empty.vue')
      },
      {
        path: 'configuration',
        component: () => import('../components/Empty.vue')
      },
      {
        path: 'mods',
        component: () => import('../components/Empty.vue')
      },
      {
        path: 'patchnotes',
        component: () => import('../components/Empty.vue')
      }
    ]
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('../views/Store.vue')
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import('../views/Community.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue'),
    redirect: '/settings/general',
    children: [
      {
        path: 'general',
        component: () => import('../components/Empty.vue')
      },
      {
        path: 'versions',
        component: () => import('../components/Empty.vue')
      },
      {
        path: 'accounts',
        component: () => import('../components/Empty.vue')
      },
      {
        path: 'about',
        component: () => import('../components/Empty.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
