var path = require('path');

module.exports = {
  entry: './src/js/App.ts',
  output: {
    globalObject: 'this',
    umdNamedDefine: true,
    library: 'mylib',
    libraryTarget: 'umd', // or var, amd, window, global... whatever will give me access from a script tag to mylib
    path: path.resolve(__dirname, 'public'),
    filename: 'js/app.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), 
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_module|public)/,
        use: [
          {
            loader: 'ts-loader', 
            options: { 
              // transpileOnly: true,
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'inline-source-map',
  externals: {
    jquery: 'jQuery',
    fabric: 'fabric',
  },
};
