module.exports = function(config) {
  config.set({
    autoWatch: false,
    basePath: '..',
    frameworks: [
      'mocha',
      'chai',
      'sinon'
    ],
    browsers: ['PhantomJS'],
    singleRun: true,
    preprocessors: {},
    files: [
      'components/lodash/dist/lodash.js',
      'test/*.spec.js',
      '*.js'
    ]
  });
};