let path = require('path');
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
            }
        ]
    }
};
