import { RouteRecordRaw } from 'vue-router';
import { RouteNameEnum } from '@/router/RouteNameEnum';

import { posts, post } from '@/router/middleware/post';

import Home from '@/views/Home.vue';
import Post from '@/views/Post.vue';

export const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    name: RouteNameEnum.Home,
    component: Home,
    beforeEnter: posts
  },
  {
    path: '/page/:page',
    name: RouteNameEnum.PostsPage,
    component: Home,
    beforeEnter: posts
  },
  {
    path: '/posts/:id',
    name: RouteNameEnum.Post,
    component: Post,
    beforeEnter: post
  },
];
