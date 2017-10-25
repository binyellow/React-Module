var webpack = require('webpack');
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
module.exports = {
  entry: './entry.js',
  output: {
    path:__dirname+"/",
    filename: 'bundle.js'
    // publicPath:"src/"
  },
  module:{
    loaders:[
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['react', 'es2015'] }},
        { test: /\.css$/,loader: 'style-loader!css-loader'}
        // {test: /\.js$/,loader: 'babel?presets=react&&es2015'},
        // { test: /\.less$/, exclude: /node_modules/, loader: 'style-loader!css-loader!less-loader' },
        // { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader' },
        // { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
        // { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000'} // 限制大小小于5k
    ]
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //       compress: {
  //           warnings: true
  //       }
  //   }),
  //   new UnminifiedWebpackPlugin()
  // ]
  // plugins:[
  //   //// html 模板插件
  //   new htmlWebpackPlugin({
  //       template:'./app/index.tem.html',
  //       inject:'body'
  //   }),
  //   // 热加载插件
  //   new webpack.HotModuleReplacementPlugin(),
  //   // 打开浏览器
  //   new OpenBrowserPlugin({
  //     url: 'http://localhost:8080'
  //   }),
  //   // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
  //   new webpack.DefinePlugin({
  //         __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
  //   })
  // ]
}
