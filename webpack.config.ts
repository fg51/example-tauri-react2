import path from 'path';

import { Configuration } from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';

const isDev = process.env.NODE_ENV === 'development';


// common
const base: Configuration = {
  mode: isDev ? 'development' : 'production',
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    filename: '{name}.js',
    assetModuleFilename: 'images/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      }
    ],
  },
  devtool: isDev ? 'inline-source-map' : false,
};

const main: Configuration = {
  ...base,
  target: 'main',
  entry: {
    main: './src/index.ts',
  },
};

export default [main];
