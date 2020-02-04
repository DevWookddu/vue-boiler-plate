const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.s?(a|c)ss$/,
        use: [
          'vue-style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
          {
            loader: 'sass-resources-loader',
            options: {
              sourceMap: true,
              resources: [
                path.resolve(__dirname, 'src/assets/scss/base/_variable.scss')
              ]
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: path.resolve(__dirname, 'dist/index.html')
    })
  ],
  devServer: {
    disableHostCheck: true,
    compress: false,
    host: 'localhost',
    port: 8080,
    https: process.env.NODE_ENV === 'production'
  },
  stats: 'errors-warnings'
}
