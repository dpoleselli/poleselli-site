const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: './src/index.ts',
    output: {
        filename: 'baseball-spinner.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Baseball Spinner',
            template: 'dev/index.html'
        })
    ],
    resolve: {
        extensions: ['.ts', '.js'],
    },
};