var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.join(__dirname, 'node_modules');
var deps = [ 
  'react/dist/react.min.js',
  'react/dist/react-dom.min.js',
  'react-router/dist/react-router.min.js',
  'material-ui'
];
var config = {
    //插件项
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
        new webpack.ProvidePlugin({
            React: "react"
        }),
    ],
    //页面入口文件配置
    entry: {
        index: [
            'webpack/hot/dev-server',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, 'app/main.js')
        ],
        vendor: [
          'react',
          'react-dom',
          'react-router'
        ]
    },
    devServer: {
        //contentBase: 'src/www', // Relative directory for base of server
        devtool: 'eval',
        hot: true, // Live-reload
        inline: true,
        port: 3000, // Port Number
        host: 'localhost', // Change to '0.0.0.0' for external facing server
    },
    resolve: {
        alias: {}
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: "/build/",
        filename: '[name].js',
    },
    module: {
        noParse: [],
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
deps.forEach(function (dep) {
  var depPath = path.resolve(node_modules_dir, dep);
  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});

module.exports = config;
