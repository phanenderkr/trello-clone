const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = env => {
	const isProduction = env === 'production';
	return {
		mode: env,
		entry: './src/app.js',
		output: {
			path: path.join(__dirname, 'public', 'dist'),
			filename: 'bundle.js'
		},
		module: {
			rules: [
				{
					loader: 'babel-loader', //which loader we're going to use
					test: /\.js$/, //what type of files you want to run this rule on
					exclude: /node_modules/
				}
			]
		},
		plugins: [new DashboardPlugin({ port: 8080 })],
		devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true,
			publicPath: '/dist/'
		}
	};
};
