module.exports = [
  {
    mode: 'production',
    entry: {
      main: './server/main.ts',
    },
    target: 'node',
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [{ loader: 'ts-loader', options: { configFile: 'tsconfig.server.json' } }],
        },
      ],
    },
    output: {
      path: __dirname + '/dist',
      filename: '[name].js',
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
  },
];
