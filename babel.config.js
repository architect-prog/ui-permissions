module.exports = function (api) {
  api.cache(false);
  const presets = [
    ['@babel/preset-typescript'],
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: { version: 3 },
        modules: 'commonjs', //If remove that it breaks terser
        targets: {
          ie: '11',
        },
      },
    ],
    '@babel/preset-react',
  ];
  const plugins = [
    ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/transform-runtime'],
    ['@babel/plugin-transform-arrow-functions'],
  ];

  return {
    presets,
    plugins,
  };
};
