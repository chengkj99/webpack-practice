var webpack = require('webpack')
module.exports={
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]

}
