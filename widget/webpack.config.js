// webpack.config.js

//The path module provides utilities for working with file and directory paths. It can be accessed.
var path = require('path');

module.exports = {
  entry: './frontend/widgets.jsx',
  output: {
    path: path.resolve(__dirname), // absolute path to the directory of this script
    filename: './bundle.js'
  },
  
  module: {
    rules: [
      {
        test: /\.jsx?$/, //a regular expression that tests what kind of files to run through this loader.
        exclude: /(node_modules)/, //ignore these files
        use: {
          loader: 'babel-loader', //the name of the loader we are going to use (babel-loader).
          query: {
            // options for the loader
            presets: ['@babel/env', '@babel/react'] //transpile back to es 5 and convert jsx code
          }
        },
      }
    ]
  },
  devtool: 'source-map'
};!