const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry : {
        'js/out.js': ['./src/js/app.js'],
    },
    output : {
        path: __dirname+'/',
        filename: '[name]'
    },
    watch: true,
    devtool: 'eval-source-map',

    module: {
        loaders:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    presets:['es2015']
                }
            }
        ],
    },
    plugins: [
        new LiveReloadPlugin()
    ]

}
