'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// var ExtractTextPlugin = require("extract-text-plus-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            },
            // { test: /\.css$/, 
            //     loader: ExtractTextPlugin.extract("style-loader", "css-loader") 
            // }
            // ,
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            // {
            //     use: ['style-loader', 'css-loader'],
            //     test: /\.css$/
            // },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        },
                    },
                ],
            }
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: { limit: 40000 }
            //         },
            //         'image-webpack-loader'
            //     ]
            // }
        ]
        ,
        plugins: [
            new ExtractTextPlugin("styles.css")
        ]
    },


};


