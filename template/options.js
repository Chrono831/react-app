const autoprefixer = require('autoprefixer');
const postCssFlexbugsFixes = require('postcss-flexbugs-fixes');

const SUPPORTED_BROWSERS = ['last 2 versions']; // browserlist query

const BABEL_OPTIONS = {
    cacheDirectory: true,
    plugins : [
        'transform-object-rest-spread', 
        'transform-decorators',
    ],
    presets : [
        ['react'],
        ['env', {
            debug: true,
            useBuiltIns : 'usage',
            targets : {
                browsers : SUPPORTED_BROWSERS
            },
        }],
    ],
    env : {
        test : {
            plugins : []
        }
    }
};

const IMAGE_OPTIONS = { 
    limit : 10000, 
    name : 'static/[name].[hash:8].[ext]'
};

const POSTCSS_OPTIONS = {
    ident: 'postcss',
    plugins: () => [
        postCssFlexbugsFixes,
        autoprefixer({
            browsers: SUPPORTED_BROWSERS,
            flexbox: 'no-2009',
        }),
    ],
};

module.exports = {
    babelOptions : BABEL_OPTIONS,
    postCssOptions : POSTCSS_OPTIONS,
    imageOptions : IMAGE_OPTIONS,
};