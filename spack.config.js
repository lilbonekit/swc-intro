module.exports = {
	entry: {
		web: __dirname + '/src/index.js',
	},
	output: {
		path: __dirname + '/dist',
		name: 'bundle.js',
	},
	options: {
		minify: true,
	},
}
