const path = require('path');

module.exports = {
    entry : './src/index.js',
    module : {
        rules:[
            {
                test: /\.css$/i,
                use : ["style-loader","css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
            },
        ],
    },
    output: {
       filename: 'main.js',
       path: path.resolve(__dirname,'dist'),
    },
};