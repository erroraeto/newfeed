// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//
// module.exports = {
//     entry: { main: './src/index.js' },
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'main.[contenthash].js',
//     },
//     mode: process.env.NODE_ENV,
//     devtool: 'source-map',
//     devServer: {
//         contentBase: path.resolve(__dirname, '/.dist'),
//         compress: true,
//         port: 8080,
//         open: true
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 use: 'babel-loader',
//                 exclude: '/node_modules/'
//             },
//             {
//                 test: /\.(ts|tsx)$/,
//                 type: "ts-loader",
//                 exclude: /node_modules/,
//             },
//             {
//                 test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
//                 type: 'asset/resource'
//             },
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader']
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './src/index.html'
//         }),
//         new CleanWebpackPlugin(),
//         new MiniCssExtractPlugin()
//     ]
// }



const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'production',
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.svg$/,
            type: 'asset/resource'
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        open: true,
    }
}

