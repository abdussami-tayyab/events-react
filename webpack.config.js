var path = require('path');

module.exports = {
	mode: 'development',

	entry: './src/index.js',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/'
	},

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                	{
                    	loader: 'babel-loader',
						options: {
                    		presets: [ 'es2015', 'react' ]
						}
	                }
				]
            },
			{
				test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
			},
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    }
};
