var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hello World',
            template: path.resolve(__dirname, './src/index.html'), // template file      
            filename: 'index.html', // output file    
        })
    ]
};
