import { createApp, nextTick } from 'vue';
import VThemePro  from 'v-theme-pro';

import './asstes/index.scss';

const app = createApp(App);

app.use(VThemePro);

app.mount('#app');
