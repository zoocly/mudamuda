const path = require('path');

/*
* 自从 v4.0.0 版本开始，webpack 不再需要配置文件
* 好像这个文件没得撒子卵用
* */
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
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
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
  }
}
