import { createApp } from 'vue';

import { router } from '@/router';
import { axios } from '@/plugins/axios';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import App from './App.vue';
import 'vue3-perfect-scrollbar/style.css';

createApp(App)
  .use(router)
  .use(createPinia())
  .use(axios)
  .use(
    createHead({
      title: 'Home',
      titleTemplate: '%s | QTIM',
    }),
  )
  .use(PerfectScrollbarPlugin)
  .mount('#app');
