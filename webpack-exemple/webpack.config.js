// import node native package
const path = require('path');
// import webpack pour les plugins
const webpack = require('webpack');


/**
 * Options for progress-plugin
 */
const handler = (percentage, message, ...args) => {
    //add percent message 
    const percent = (percentage * 100).toFixed(2);
    const msg = message.toUpperCase();
    //if arge.lenght === 0 return nothing else join them by |
    const argOrDefault = (args.length === 0) ? "" : args.join(' | ');
    // e.g. Output each progress message directly to the console:
    console.info(percent, msg, ...argOrDefault);
};

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
    plugins: [
        // import de progressPlugIn deja dans webpack => une instance suffit
        new webpack.ProgressPlugin(handler),
    ]
}