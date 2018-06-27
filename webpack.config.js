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
        rules: [
          {

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
        },
        // "css" loader resolves paths in CSS and adds assets as dependencies.
        // "style" loader turns CSS into JS modules that inject <style> tags.
        // In production, we use a plugin to extract that CSS to a file, but
        // in development "style" loader enables hot editing of CSS.
        {
          test: /\.css$/,
          use: [
            require.resolve('style-loader'),
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
              },
            }
            // {
            //   loader: require.resolve('postcss-loader'),
            //   // options: {
            //   //   // Necessary for external CSS imports to work
            //   //   // https://github.com/facebookincubator/create-react-app/issues/2677
            //   //   ident: 'postcss',
            //   //   plugins: () => [
            //   //     require('postcss-flexbugs-fixes'),
            //   //     autoprefixer({
            //   //       browsers: [
            //   //         '>1%',
            //   //         'last 4 versions',
            //   //         'Firefox ESR',
            //   //         'not ie < 9', // React doesn't support IE8 anyway
            //   //       ],
            //   //       flexbox: 'no-2009',
            //   //     }),
            //   //   ],
            //   // },
            // },
          ],
        },
      ]
    }
};
