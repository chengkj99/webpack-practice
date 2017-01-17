
var webpack = require('webpack');
var devFlagPlugin = new webpack.DefinePlugin({
  _DEV_: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
  TESTDEV: 'true'
})

console.log('process.env.DEBUG::',process.env.DEBUG)
module.exports={
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    devFlagPlugin
  ]

}
