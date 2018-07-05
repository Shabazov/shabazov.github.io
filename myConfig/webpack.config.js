const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
}

let config = {
    entry: {
      'index': PATHS.src + '/pages/index/index.js',
      // 'blog': PATHS.src + '/pages/blog/blog.js'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            pretty: true,
          }
        },
        {
          test: /\.styl$/,
          use: [
              'style-loader',
              'css-loader',
              'stylus-loader'
              ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
        plugins: [
            // new ExtractTextPlugin("style.css"),
            new HtmlWebpackPlugin({
              filename: 'index.html',
              chunks: ['index'],
              template: PATHS.src + '/pages/index/index.pug'
              // title: 'webpack app'
            }),
            // new HtmlWebpackPlugin({
            //   filename: 'blog.html',
            //   chunks: ['blog'],
            //   template: PATHS.src + '/pages/blog/blog.pug'
            //   // title: 'webpack app'
            // }),
          ]
     
      
    };

module.exports = (env, options) => {
    let development = options.mode === 'development';
    config.devtool = development ? 'source-map' : 'eval-sourcemap';
    return config;
                                 
}