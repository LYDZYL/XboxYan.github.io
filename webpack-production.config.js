var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.join(__dirname, 'node_modules');

var config = {
    //插件项
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.ProvidePlugin({
            React: "react"
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,  // remove all comments
            },
            compress: {
                // supresses warnings, usually from module minification
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("production"),
            },
        }),
    ],
    //页面入口文件配置
    entry:{
        index:path.resolve(__dirname, 'app/main.js'),
        vendor: [
          'react',
          'react-dom',
          'react-router',
          'material-ui'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: "/build/",
        filename: '[name].js',
    },
    module: {
        //加载器配置
        loaders: [{
            test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
            query:
            {
                presets: ['es2015', 'react']
            }
        },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            { 
                test: /\.(png|jpg|gif)$/, 
                loader: 'url?limit=8192!file?name=img/[hash:8].[name].[ext]' 
            }
        ]
    }
};

module.exports = config;