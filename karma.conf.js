module.exports = cfg => {
  cfg.set({
    browsers: ['ChromeHeadless', 'Firefox'],
    singleRun: true,
    frameworks: ['jasmine', 'karma-typescript'],
    reporters: ['progress', 'karma-typescript'],
    preprocessors: {
      '**/*.ts': 'karma-typescript',
    },
    files: ['src/**/*.ts', 'tests/**/*.test.ts'],
    karmaTypescriptConfig: {
      coverageOptions: {
        exclude: /(node_modules|test.ts$)/i,
      },
      reports: {
        lcovonly: {
          directory: 'coverage',
          subdirectory: () => '',
          filename: 'lcov.info',
        },
        html: {
          directory: 'coverage',
          subdirectory: () => '',
        },
      },
    },
  });
};
