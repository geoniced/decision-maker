const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/index.js', './src/scss/styles.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: false,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          miniCss.loader,
          {
            loader:'css-loader',
            options: {url: false}
          },
          'sass-loader',
       ]
      }
    ],
  },
  plugins: [
    new miniCss({
      filename: 'css/styles.css'
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
};
