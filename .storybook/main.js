// .storybook/main.js|cjs|ts

const { mergeConfig } = require('vite');

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)','../src/**/*.stories.(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials','@storybook/addon-docs'],
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {

    return config
    // Merge custom configuration into the default config
    // return mergeConfig(config, {
    //   // Use the same "resolve" configuration as your app
    //   resolve: (await import('../vite.config')).default.resolve,
    //   // Add dependencies to pre-optimization
    //   optimizeDeps: {
    //     include: ['storybook-dark-mode'],
    //   },
    // });
  },
};