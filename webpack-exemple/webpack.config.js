// import node native package
const path = require('path');

module.exports = {
    //starting point for bundling
    entry:  [
        './src/index.js',
        ],
    //ending point after compiling, value is an object with 2 properties
    output: {
        //path (package natively given by node for an absolute path) 
        path: path.resolve(__dirname, 'dist'),
        //change the bundle filename
        filename: 'bundle.js'
    },
    //module property , value is an object
    module: {
        //rules value is an array with objects
        rules: [
            {
                //if .ext is .js use babel-loader
                test: /\.js$/i,
                // exclude node_modules by a regex
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                //if .ext is .css use css-loader for translates CSS into CommonJS & style-loader Creates `style` nodes from JS strings
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
}