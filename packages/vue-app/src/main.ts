import './assets/main.css';
import { SkDayPickerLib } from '@serhatkaya/daypicker-vue';

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(SkDayPickerLib).mount('#app');
