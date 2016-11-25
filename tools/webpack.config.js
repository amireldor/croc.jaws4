const path = require('path');

const srcPath = path.resolve(__dirname, '../src');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './build',
    filename: 'crocjaws.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        include: [srcPath, path.resolve(__dirname, '../tools')]
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: srcPath
      },
      {
        test: /\.styl$/,
        loader: 'stylus-loader',
        include: srcPath
      }
    ]
  }
};
