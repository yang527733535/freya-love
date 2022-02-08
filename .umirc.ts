import { defineConfig } from 'umi';
import postCssPxToViewport from 'postcss-px-to-viewport';

export default defineConfig({
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  extraPostCSSPlugins: [
    postCssPxToViewport({
      viewportWidth: 375,
    }),
  ],

  routes: [
    {
      path: '/',
      component: '@/layouts/BlankLayout.js',
      routes: [
        {
          path: '/hall',
          component: '@/layouts/HallLayout.js',
          routes: [
            { path: '/hall/index', exact: true, component: 'hall' },
            { path: '/hall/mybook', component: 'mybook' },
            { path: '/hall/userinfo', component: 'userinfo' },
            {
              path: '/hall',
              redirect: '/hall/index',
            },
          ],
        },
        {
          path: '/search',
          component: '@/layouts/SearchLayout.js',
          routes: [
            {
              path: '/search',
              redirect: '/search/index',
            },
            { path: '/search/index', component: 'search' },
          ],
        },
        {
          path: '/',
          redirect: '/hall',
        },
      ],

      // routes: [
      //   { path: '/hall', exact: true, component: 'hall' },
      //   { path: '/mybook', component: 'mybook' },
      //   { path: '/userinfo', component: 'userinfo' },
      //   { path: '/search', layouts: false, component: 'search' },
      // ],
    },
  ],
  fastRefresh: {},
  theme: {
    'primary-color': '#9676FF',
  },
  proxy: {
    '/ga/': {
      target: 'http://dev-chapters-int.stardustgod.com/',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
});
