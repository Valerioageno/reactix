/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const buildDirectory = 'dist'

module.exports = {
   mode: 'development',
   entry: './src/index.tsx',
   output: {
      path: path.join(__dirname, buildDirectory),
      filename: 'bundle.js',
      publicPath: '/',
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
               loader: 'ts-loader',
            },
         },
         {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: 'images/[hash]-[name].[ext]',
                  },
               },
            ],
         },
         {
            test: /\.html$/,
            exclude: /node_modules/,
            use: {
               loader: 'html-loader',
            },
         },
         {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
         },
      ],
   },
   devServer: {
      port: 3000,
      open: true,
      historyApiFallback: true,
   },
   plugins: [
      new CleanWebpackPlugin({ buildDirectory }),
      new HtmlWebpackPlugin({
         template: './public/index.html',
      }),
   ],
}
