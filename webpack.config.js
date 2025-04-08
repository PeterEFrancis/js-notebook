const path = require('path');

module.exports = {
  entry: './src/index.js',        // Entry point of your application
  output: {
    filename: 'bundle.js',        // Output file where the bundled code will go
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/,               // Use style-loader and css-loader for CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,                // Use Babel to transpile JS files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    alias: {
      'codemirror': path.resolve(__dirname, 'node_modules/codemirror')
    }
  },
  mode: 'development',              // Use 'production' for optimized builds
};