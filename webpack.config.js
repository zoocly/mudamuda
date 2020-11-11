const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry:'./src/index.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    // publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.css$/,
        use : [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.less$/,
        use : [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      },
      // {
      //   test: /\.css$/,
      //   use: [ 'style-loader', 'css-loader']
      // },
      // {
      //   test: /\.less$/,
      //   use: [{
      //     loader: "style-loader" // creates style nodes from JS strings
      //   }, {
      //     loader: "css-loader" // translates CSS into CommonJS
      //   }, {
      //     loader: "less-loader" // compiles Less to CSS
      //   }]
      // },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {}
      //     },
      //   ]
      // },
        //todo url-loader 和 file-loader 不能同时用？
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },

    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    }),
  ]
}
