const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: './src/index.ts',
    output: {
        filename: 'leadership-dichotomies.js',
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
            title: 'Leadership Dichotomies',
            template: 'dev/index.html'
        })
    ],
    resolve: {
        extensions: ['.ts', '.js'],
    },
};