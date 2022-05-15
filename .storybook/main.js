const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    webpackFinal: async (config) => {
        config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../src')];
        config.resolve.plugins = [...(config.resolve.plugins || []), new TsconfigPathsPlugin()];
        return config;
    },
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5'
    }
};
