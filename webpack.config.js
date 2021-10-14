module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        // publicPath:'/',
        filename: 'main.js',
        chunkFilename: '[name].js'
    },
    devServer: {
      static: './dist',
    },
    module: {
      rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
      ]
    },
  };