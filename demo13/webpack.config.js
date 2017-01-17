var webpack = require('webpack');
// module.exports={
//   entry: {
//     bundle: './main.js',
//     vendor: ['jquery']
//   },
//   output: {
//     filename: '[name].js'
//   },
//   plugins: [
//     new webpack.optimize.CommonsChunkPlugin('vendor','vendor.js')
//   ]
// }

//整个model都可以使用jquery
module.exports={
  entry: {
    bundle: './main.js',
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
}
