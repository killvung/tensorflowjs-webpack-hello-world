var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hello World',
            template: path.resolve(__dirname, './src/index.html'), // template file      
            filename: 'index.html', // output file    
        })
    ]
};
