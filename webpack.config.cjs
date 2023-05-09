/* eslint-disable @typescript-eslint/no-var-requires */
const CopyPlugin = require('copy-webpack-plugin');
const { join } = require('path');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  entry: {
    main: './electron/main.ts',
    preload: './electron/preload.ts',
  },
  target: 'electron-main',
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: /electron/,
        use: [{ loader: 'ts-loader', options: { configFile: 'tsconfig.electron.json' } }],
      },
    ],
  },
  output: {
    path: join(__dirname, 'dist', 'electron'),
    filename: '[name].js',
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'build/icon.ico', to: 'icon.ico' }],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
