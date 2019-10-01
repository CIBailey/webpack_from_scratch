const webpack = require('webpack');
const path = require('path');

//define starting point
let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'output.js'    //output is what we link to our entry point html file in order to "output" to our html file
    },
    mode: 'none',
    module: {
        rules: [{
            test: /\.js$/, // files ending with .js
            exclude: /node_modules/, // exclude the node_modules directory
            loader: "babel-loader" // use this (babel-core) loader
        },
        {
            test: /\.scss$/, // files ending with .js
            loader: ['style-loader', 'css-loader', 'sass-loader'] // use this (babel-core) loader
        }]
    }
}

//then export the moduel
module.exports = config;