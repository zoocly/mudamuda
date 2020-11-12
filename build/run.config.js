const base = require('./base.config');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge.merge(base,{
    devServer: {
        contentBase: './dist',
        inline: true,
        port: '9999'
    }
});
