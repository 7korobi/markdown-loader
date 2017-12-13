marked-pre-loader
===============

marked-pre-loader for webpack using [marked-pre](https://github.com/7korobi/marked).

[![](https://img.shields.io/npm/v/marked-pre-loader.svg)](https://www.npmjs.com/package/marked-pre-loader)
[![](https://img.shields.io/npm/dm/marked-pre-loader.svg)](https://www.npmjs.com/package/marked-pre-loader)
[![Dependency Status](https://david-dm.org/peerigon/marked-pre-loader.svg)](https://david-dm.org/peerigon/marked-pre-loader)
[![Build Status](https://travis-ci.org/peerigon/marked-pre-loader.svg?branch=master)](https://travis-ci.org/peerigon/marked-pre-loader)

## Installation

`yarn add marked-pre-loader`

## Usage

Since marked's output is HTML, it's best served in conjunction with the [html-loader](https://github.com/webpack/html-loader).

### Webpack 2

```javascript
{
    module: {
        rules: [{
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "marked-pre-loader",
                        options: {
                            /* your options here */
                        }
                    }
                ]
            }]
    }
}
```

### Options

Simply pass your marked [options](https://github.com/chjj/marked#options-1) as shown above.
In order to specify [custom renderers](https://github.com/peerigon/marked-pre-loader/issues/5), simply set the `options.renderer`-option on your webpack options.

```javascript
// webpack.config.js

const marked = require("marked-pre");
const renderer = new marked.Renderer();

return {
    module: {
        rules: [{
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "marked-pre-loader",
                        options: {
                            renderer
                        }
                    }
                ]
            }]
    }
}
```
## License

MIT (http://www.opensource.org/licenses/mit-license.php)

