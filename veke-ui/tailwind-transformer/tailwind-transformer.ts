import type { WebpackConfigMutator } from '@teambit/webpack';
import tailwindcss, { Config } from 'tailwindcss';
import { tailwindConfig } from '@veke/veke-ui.tailwind-config';

type TailwindTransformerOptions = {
  /**
   * apply the Tailwind CDN to the HTML template
   * @default false
   * @see https://tailwindcss.com/docs/installation/play-cdn
   */
  cdn?: boolean;
  /**
   * Custom Tailwind config
   * If a string is provided, it will be used as the path to the config file
   * @default tailwind.config.js
   */
  config?: Config | string;
};

/**
 * Webpack transformer for Tailwind CSS
 */
export function tailwindTransformer({
  cdn,
  config,
}: TailwindTransformerOptions = {}) {
  const usedConfig = config || tailwindConfig;

  return (configMutator: WebpackConfigMutator) => {
    configMutator.addPostCssPlugins([tailwindcss(usedConfig)]);

    if (cdn) {
      configMutator.addElementToHtmlTemplate({
        parent: 'head',
        position: 'append',
        tag: 'script',
        attributes: {
          src: 'https://cdn.tailwindcss.com/',
        },
      });

      configMutator.addElementToHtmlTemplate({
        parent: 'head',
        position: 'append',
        tag: 'script',
        content: `tailwind.config = ${JSON.stringify(usedConfig, null, 2)}`,
      });
    }

    return configMutator;
  };
}
