# SWC

`npx swc 'path/to/file' -o 'output/path/to/file'`
`npx swc 'path/to/file' -d 'output/path/to/directory'`
`npx swc src/*.js -d dist`

- -o - output file
- -d - output directory
- -w - watch (need to install `npm install chokidar --save-dev`)

##

# .swcrc

`.swrc` in the root directory is a config file.

#

## Bundler (swcpack)

`spack.config.js` in the root directory.
Basic config could be:

```js
//spack.config.js
module.exports = {
	entry: {
		web: __dirname + '/src/index.js',
	},
	output: {
		path: __dirname + '/dist',
	},
	options: {
		minify: true,
	},
}
```

Run bundler with `npx spack`
