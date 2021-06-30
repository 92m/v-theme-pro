module.exports = {
  'presets': [
    [
      '@babel/env',
      {
        loose: true,
        modules: false,
      },
    ],
    '@babel/typescript'
  ],
  plugins: [
    '@vue/babel-plugin-jsx',
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    '@babel/transform-runtime',
    'lodash',
  ],
  overrides: [
    {
      test: /\.vue$/,
      plugins: [
        '@babel/transform-typescript',
      ],
    },
  ]
};
