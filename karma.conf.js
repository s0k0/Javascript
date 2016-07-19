/**
 * Created by skolbe on 14.07.16.
 */
module.exports = function(config) {
    config.set({
        basePath: './',
        files: ['src/*/*.js'],
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ],
        autoWatch: false,
        singleRun: true
    });
};
