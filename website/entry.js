import { createApp } from 'vue';
import VThemePro  from 'v-theme-pro';

import App from './App.vue';
import './asstes/index.scss';

const app = createApp(App);

app.use(VThemePro);

app.mount('#app');
