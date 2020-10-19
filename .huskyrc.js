module.exports = {
  hooks: {
    'commit-msg':
      'commitlint -E HUSKY_GIT_PARAMS && npm run doc && git add API.md',
    'pre-commit':
      'npm run architecture && (git add ARCHITECTURE.md || exit 1) && npm t && lint-staged && npm run --silent checkStaged',
  },
};
