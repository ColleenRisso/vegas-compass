var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './app/index.js',
    output : {
        path : path.resolve(__dirname , 'build'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                use:'babel-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test : /\.css$/,
                use:['style-loader', 'css-loader']
            }
        ]
    },
    mode:'development',
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'app/index.html'
        })
    ]

}