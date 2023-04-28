import { VueEnv, EnvHandler } from '@teambit/vue.vue';
import { tailwindTransformer } from '@veke/veke-ui.tailwind-transformer'

import { Preview } from '@teambit/preview';
import { VuePreview } from '@teambit/vue.dev-services.preview.vue-preview';

export class MyVueEnv extends VueEnv {
  preview(): EnvHandler<Preview> {
    return VuePreview.from({
      transformers: [tailwindTransformer({})]
    });
  }
}

export default new MyVueEnv();