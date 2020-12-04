const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = (env) => ({
    mode: env.NODE_ENV,
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
       loader: 'babel-loader',
       test: /\.js$/,
       exclude: /node_modules/,
       query: {
         presets: ['@babel/env', '@babel/react'],
         plugins: ['@babel/plugin-proposal-class-properties']
       },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
      ]
     }, 
     plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
     devServer: {
       contentBase: path.join(__dirname, 'dist'),
     }
});