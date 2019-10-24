var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        // options: {
                        //     publicPath: (resourcePath, context) => {
                        //         return path.relative(path.dirname(resourcePath), context) + '/';
                        //     },
                        // },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                          sourceMap: true
                        }
                      },
                    'sass-loader',
                ],
            },
            {
                test: /\.(gif|svg|jpg|png)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[name].[ext]'
                }
            }
        ]
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Cuda',
            filename: 'index.html',
            template: 'src/index.html'
        }
        ),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ]
}