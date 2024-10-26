# SWC (Speedy web compiler)

**SWC** is a super-fast compiler and bundler for JavaScript and TypeScript code, written in Rust. It serves as a high-performance alternative to tools like Babel, offering significant speed improvements in the build process.

- `npx swc 'path/to/file' -o 'output/path/to/file'`
- `npx swc 'path/to/file' -d 'output/path/to/directory'`
- `npx swc src/*.js -d dist`

#

- -o - output file
- -d - output directory
- -w - watch (need to install `npm install chokidar --save-dev`)

##

# .swcrc

SWC can be configured using a `.swcrc` file in the root directory.
Example:

```json
{
	"jsc": {
		"parser": {
			"syntax": "typescript",
			"tsx": true,
			"decorators": true,
			"dynamicImport": true
		},
		"transform": {
			"react": {
				"runtime": "automatic"
			},
			"decoratorMetadata": true
		},
		"target": "es2015",
		"loose": false,
		"externalHelpers": false
	},
	"module": {
		"type": "es6",
		"strict": true,
		"strictMode": true,
		"lazy": false,
		"noInterop": false
	},
	"sourceMaps": true
}
```

#

## Bundler (swcpack)

SWC includes a bundler known as spack, which can be used to bundle your application.
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
