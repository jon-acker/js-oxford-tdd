const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        filename: './dist/bundle.min.js'
    },
    plugins: [
        new UglifyJsPlugin()
    ]
};