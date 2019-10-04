const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

//define starting point
let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'), //path
        filename: 'output.js'    //output is what we link to our entry point html file in order to "output" to our html file
    },
    mode: 'none',
    module: {
        rules: [
            {
            test: /\.js$/, // files ending with .js
            exclude: /node_modules/, // exclude the node_modules directory
            loader: "babel-loader" // use this (babel-core) loader
        },
        {
            test: /\.scss$/, // files ending with .scss,
            use: ExtractTextWebpackPlugin.extract({ //call our plugin with extract method
                use:['css-loader','sass-loader'], // use these loaders
                fallback: 'style-loader' //fallback for any css not extracted
            })
        },
    ]
    },
    plugins: [
        new ExtractTextWebpackPlugin('styles.css')
    ]
}

//then export the moduel
module.exports = config;