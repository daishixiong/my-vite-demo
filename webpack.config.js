const path = require('path');
const webpack = require('webpack'); // 访问内置的插件
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: "./src/main.ts",
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].[contenthash].bundle.js',
        // publicPath: 'https://cdn.example.com',
        publicPath: '/',
        chunkFilename: "[contenthash].js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                  { loader: 'style-loader' },
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true
                    }
                  }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    {
                      loader: 'css-loader',
                      options: {
                        modules: true
                      }
                    },
                    { loader: 'less-loader' }
                  ]
            },
            { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/, },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource',
                generator: {
                    // [ext]前面自带"."
                    filename: 'assets/[hash:8].[name][ext]',
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".json", ".jsx", ".css"],
        alias: {}
    },
    experiments: {
        asyncWebAssembly: true,
        // WebAssembly as async module (Proposal)
        syncWebAssembly: true,
        // WebAssembly as sync module (deprecated)
        outputModule: true,
        // Allow to output ESM
        topLevelAwait: true,
        // Allow to use await on module evaluation (Proposal)
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
              terserOptions: {
                output: {
                  comments: false
                }
              }
            })
        ],
        chunkIds: "size",
        // method of generating ids for chunks
        moduleIds: "size",
        // method of generating ids for modules
        mangleExports: "size",
        // rename export names to shorter names
        minimize: true,
        // minimize the output files
        // minimizer: [new CssMinimizer(), "..."],
        splitChunks: {
            cacheGroups: {
                "my-name": {
                    // define groups of modules with specific
                    // caching behavior
                    test: /\.sass$/,
                    type: "css/mini-extract",
                    /* Advanced selectors (click to show) */
        
                    /* Advanced effects (click to show) */
                }
            }
        }
    },
    infrastructureLogging: {
        level: "info", // (default)
        // debug: true,
        debug: /webpack/,
        // debug: [ "MyPlugin", /webpack/ ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'manual' // auto
        })
    ],
    parallelism: 1, // number
    // limit the number of parallel processed modules
    profile: true, // boolean
    // capture timing information
    bail: true, //boolean
    // fail out on the first error instead of tolerating it.
    dependencies: ["name"]
}