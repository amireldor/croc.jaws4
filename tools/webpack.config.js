module.exports = {
  entry: './src/main.js',
  output: {
    path: './build',
    filename: 'crocjaws.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.styl$/,
        loader: 'stylus-loader'
      }
    ]
  }
};
