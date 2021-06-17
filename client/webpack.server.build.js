/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
var nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const buildDirectory = 'dist/server'

module.exports = {
   mode: 'production',
   entry: ['./server/index.ts'],
   output: {
      path: path.join(__dirname, buildDirectory),
      filename: 'bundle.js',
      publicPath: '/server',
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
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
   node: {
      __dirname: false,
      __filename: false,
   },
   target: 'node',
   externals: [nodeExternals()],
   plugins: [
      new MiniCssExtractPlugin({
         filename: 'bundle.css',
      }),
   ],
}
