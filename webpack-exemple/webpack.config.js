// import node native package
const path = require('path');

module.exports = {
    //starting point for bundling
    entry: './src/index.js',
    //ending point after compiling
    //value is an object with 2 properties
    output: {
        //path (package natively given by node for an absolute path) 
        path: path.resolve(__dirname, 'dist'),
        //change the bundle filename
        filename: 'bundle.js'
    },
    //module property for loader Es6 vers Es5, value is an object
    module: {
        //rules value is an array with objects
        rules: [
            {
                //if .ext is .js use babel-loader
                test: /\.js$/,
                // exclude node_modules by a regex
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}