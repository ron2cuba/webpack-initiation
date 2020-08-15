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
    }
}