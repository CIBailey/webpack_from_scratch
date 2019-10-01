const webpack = require('webpack');

//define starting point
let config = {
    entry: './index.js',
    output: {
        filename: 'output.js'
    },
    mode: 'none'
    //output is what we link to our entry point html file in order to "output" to our html file
}

//then export the moduel
module.exports = config;