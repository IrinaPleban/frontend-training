const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
    entry: {
        app: './index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join('lib'),
        port: 5000,
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});
