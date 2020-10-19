module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: '12.12.0',
        },
      },
    ],
  ],
  plugins: ['@babel/plugin-proposal-object-rest-spread'],
};
