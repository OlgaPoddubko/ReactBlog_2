const path = require('path');

module.exports = {
  entry: './src/client/index.jsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve('./public/js/')
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader",
        query: {
          limit: '10000',
          name: '[name].[ext]',
          outputPath: 'fonts/'
      }
      }, {
        test: /\.jsx?$/,
        use: 'babel-loader'
      }
    ]
  }
};
