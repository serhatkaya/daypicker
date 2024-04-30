import { applyPolyfills, defineCustomElements } from '@serhatkaya/daypicker-core/loader';
import { Plugin } from 'vue';

export const SkDayPickerLib: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
