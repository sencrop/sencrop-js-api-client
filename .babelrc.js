module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: '6.9.5',
        },
      },
    ],
  ],
  plugins: ['@babel/plugin-proposal-object-rest-spread'],
};
