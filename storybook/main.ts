import type { StorybookConfig } from "@storybook/react-vite";
// import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)", "../src/**/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    // Astroの設定をマージする
    const { default: astroConfig } = await import("../astro.config.mjs");
    return {
      ...config,
      plugins: [...(config.plugins || []), astroConfig.vite?.plugins].filter(Boolean),
    };

    // return mergeConfig(config, {
    //   resolve: {
    //     alias: {
    //       '@': path.resolve(__dirname, '../src'),
    //     },
    //   },
    //   plugins: [
    //     astroInVite(),
    //     // Astroプラグインを動的にインポート
    //     // (await import('astro/vite-plugin')).default(),
    //   ],
    // },
    // });
  },
};

export default config;