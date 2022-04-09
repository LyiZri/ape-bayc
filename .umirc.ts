import { defineConfig } from 'umi';

export default defineConfig({
  title: 'BAYC',
  base: '/',
  publicPath: '/',
  outputPath: '/dist/',
  hash: true,
  history: {
    type: 'hash',
  },
  favicon: 'https://boredapeyachtclub.com/0d090ca3534b3dd85dc9.ico',
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  cssLoader: {
    localsConvention: 'camelCase',
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  antd: {
    dark: false,
    compact: true,
  },
  extraPostCSSPlugins: [
    require('postcss-import'),
    // require('tailwindcss')({
    //   config: './tailwind.config.ts',
    // }),
    require('postcss-nested'),
  ],
  chainWebpack(config: any) {
    config
      .plugin('replace')
      .use(require('webpack').ContextReplacementPlugin)
      .tap(() => {
        return [/^\.\/locale$/, /moment$/];
      });
  },
});
