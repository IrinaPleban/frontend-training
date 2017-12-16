const path = require('path');
const CopyWebpachPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: [
        'babel-polyfill',
        'whatwg-fetch',
        './index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract('css-loader')
            },
            {
                test: /\.json$/,
                use: [{
                    loader: 'babel-loader'
                },
                {
                    loader: path.resolve(__dirname, 'loader', 'json-loader.js')
                }]
            }
        ]
    },
    watch: true,
    plugins: [
        new CopyWebpachPlugin([
            {
                from: '*.html'
            }
        ]),
        new ExtractTextPlugin('style.css')
    ]
};
