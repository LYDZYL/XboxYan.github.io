var path = require('path');
var webpack = require('webpack');
module.exports = {
    //插件项
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js')
    ],
    //页面入口文件配置
    entry: [
        'webpack/hot/dev-server',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'app/main.js')
    ],
    devServer: {
        //contentBase: 'src/www', // Relative directory for base of server
        devtool: 'eval',
        hot: true, // Live-reload
        inline: true,
        port: 3000, // Port Number
        host: 'localhost', // Change to '0.0.0.0' for external facing server
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: "/build/",
        filename: 'bundle.js',
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
                loader: 'url?limit=8192' 
            }
        ]
    }
};