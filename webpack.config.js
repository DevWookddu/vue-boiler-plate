const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const path = require('path')

const MODE = process.env.NODE_ENV || 'development'
const isProduction = MODE === 'production'

module.exports = {
  mode: MODE,
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: isProduction ? 'js/[name].[chunkhash].js' : '[id].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.s?(a|c)ss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
          {
            loader: 'sass-resources-loader',
            options: {
              sourceMap: true,
              resources: [
                path.resolve(__dirname, 'src/assets/scss/base/_variable.scss'),
              ],
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: [/node_modules/],
        loader: 'eslint-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new StylelintWebpackPlugin({
      files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
    }),
    new CopyWebpackPlugin([
      { from: 'static', to: 'static' },
    ]),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash].css',
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: path.resolve(__dirname, 'dist/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.vue', '.js', '.json', '.scss'],
  },
  devtool: !isProduction && 'eval-source-map',
  devServer: {
    disableHostCheck: true,
    compress: false,
    host: '0.0.0.0',
    port: 8080,
    https: isProduction,
    historyApiFallback: true,
  },
  stats: process.env.DEV_SERVER ? 'errors-warnings' : 'normal',
}
