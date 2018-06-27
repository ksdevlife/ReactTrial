const path = require('path');


module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        rules: [{

            exclude: /node_module/,
            test: /\.js[x]?$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['env', { modules: false }]
                    ]
                }
            }]
        }]
    }
};