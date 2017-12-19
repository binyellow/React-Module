var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './entry.js',
  output: {
    path:__dirname+"/build/",
    filename: '[name]-[hash].js'
    // publicPath:"src/"
  },
  module:{
    loaders:[
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['react', 'es2015', 'stage-2'] }},
        { test: /\.css$/,loader: 'style-loader!css-loader'}
        // {test: /\.js$/,loader: 'babel?presets=react&&es2015'},
        // { test: /\.less$/, exclude: /node_modules/, loader: 'style-loader!css-loader!less-loader' },
        // { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader' },
        // { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
        // { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000'} // 限制大小小于5k
    ]
  },
  plugins: [
  //   //代码压缩插件，开这个插件开启webpack服务会报错，暂时不知道为什么
  //   new webpack.optimize.UglifyJsPlugin({
  //       compress: {
  //           warnings: true
  //       }
  //   }),
  //   new UnminifiedWebpackPlugin()
  // ]
  // plugins:[
  //   //// html 模板插件
    new htmlWebpackPlugin({
        title:"React_Module",
        template:'./index.tem.html',//这个是模板
        inject:'body'//插入位置
    }),
  //   // 热加载插件
  //   new webpack.HotModuleReplacementPlugin(),
  //   // 打开浏览器
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    }),
  //   // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
  //   new webpack.DefinePlugin({
  //         __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
  //   })
  ]
}
