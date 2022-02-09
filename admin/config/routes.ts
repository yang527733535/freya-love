export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },

  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   component: './Admin',
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //     {
  //       component: './404',
  //     },
  //   ],
  // },
  {
    name: '图片管理',
    icon: 'table',
    path: '/imagelist',
    component: './TableList',
  },
  {
    name: '视频管理',
    icon: 'table',
    path: '/videolist',
    component: './VideoTableList',
  },
  {
    path: '/',
    redirect: '/imagelist',
  },
  {
    component: './404',
  },
];
