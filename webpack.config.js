const path = require('path')

module.exports = {
  target: 'node',
  entry: path.resolve(__dirname, './src/index.js'),
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: "images/[name].[contenthash][ext]"
        }
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/inline',
      },
    ],
  },
  mode : "development",
  watch : true,
  output: {
    path: path.resolve(__dirname,  "./" , "build" ,"./"),
    filename: 'bundle.js',
    
  }
}