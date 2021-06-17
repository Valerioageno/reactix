/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { ReactLoadablePlugin } = require('react-loadable/webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const buildDirectory = 'dist'
const outputDirectory = buildDirectory + '/client'

module.exports = {
   mode: 'production',
   entry: './src/index.tsx',
   output: {
      path: path.join(__dirname, outputDirectory),
      filename: 'bundle.js',
      publicPath: '/',
      chunkFilename: '[name].[chunkhash].js',
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
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
         },
      ],
   },
   plugins: [
      new CleanWebpackPlugin({
         cleanOnceBeforeBuildPatterns: [path.join(__dirname, buildDirectory)],
      }),
      new ReactLoadablePlugin({
         filename: './dist/react-loadable.json',
      }),
      new MiniCssExtractPlugin({
         filename: 'bundle.css',
      }),
   ],
}
