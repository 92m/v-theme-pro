
import type { App } from 'vue';

import VtButton from '@v-theme-pro/button';

const components = [
  VtButton
];


const install = (app: App ) => {
  components.forEach(component=> {
    app.component(component.name, components);
  });
};

export {
  VtButton
};

export default {
  install
};
