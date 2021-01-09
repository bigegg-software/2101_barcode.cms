
  import { Layout } from '@/layouts'
  
  export const constantRouterMap = [
    
    {
      path: '/dashboard',
      name: 'home',
      redirect: '/dashboard/user/list',
      component: Layout,
      children: [
        
      {
        path: 'user/list',
        name: 'user_list',
        meta: { title: '列表' },
        component: () => import('@/views/User/list')
      },
      {
        path: 'user/edit/:id',
        name: 'user_edit',
        meta: { title: '编辑' },
        component: () => import('@/views/User/edit')
      },
      {
        path: 'user/new',
        name: 'user_new',
        meta: { title: '新建' },
        component: () => import('@/views/User/new')
      },
  
      ]
    },
  
    {
      path: '/login',
      name: 'login',
      meta: { title: '登录' },
      component: () => import('@/views/login.vue')
    },
    {
      path: '*',
      name: 'login',
      meta: { title: '登录' },
      component: () => import('@/views/login.vue')
    }
  ]