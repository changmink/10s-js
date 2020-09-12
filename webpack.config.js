const path = require('path');

module.exports = {
    name: '10s module',
    mode: 'development',
    devtool: 'eval',
    resolve:{
        extensions:['.js', '.jsx'],
    },
    entry:{
        app:['./index']
    },
    module:{
        rules:[{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            options:{
                presets:['@babel/preset-env', '@babel/preset-react'],
                plugins:['react-hot-loader/babel']
            }
        }]
    },
    output:{
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/'
    }
}