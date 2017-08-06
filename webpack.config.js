
'use strict';

var ExtractTextPlugin = require("extract-text-webpack-plugin");  //css单独打包

module.exports = {
    devtool: 'eval-source-map',

  //  entry: __dirname + '/src/entry/*.js', //唯一入口文件
    entry: {
      'app':'./src/entry/entry.js',
      'bos':'./src/entry/entry1.js'
    },
    output: {
        path: __dirname + '/build', //打包后的文件存放的地方
        filename: '[name].js' //打包后输出文件的文件名
    },

    module: {
        loaders: [
            { test: /\.(js|jsx)$/, loader: "babel", include: /src/},
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css!postcss")},
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!postcss!sass")},
            { test: /\.less$/, loader: ExtractTextPlugin.extract("style", "css!postcss!less")},
            { test: /\.(png|jpg)$/, loader: 'url?limit=8192'}
        ]
    },

    postcss: [
        require('autoprefixer')    //调用autoprefixer插件,css3自动补全
    ],

    devServer: {
        // contentBase: './src/views'  //本地服务器所加载的页面所在的目录
        port: 8888,
        colors: true,  //终端中输出结果为彩色
        historyApiFallback: true,  //不跳转
        inline: true  //实时刷新
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
    ]

}
