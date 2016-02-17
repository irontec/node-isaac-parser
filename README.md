# isaac-wrapper.parser

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Downloads][download-badge]][npm-url]

> Node.js Isaac format encoder/decoder

## Install

```sh
npm i --save isaac-wrapper.parser
```

## Usage

```js
import isaacWrapperParser from "isaac-wrapper.parser"

let generatedJSONObject = isaacWrapperParser.decode(ISAACString);

let generatedISAACString = isaacWrapperParser.encode(action, [arguments...]);
```

## License

[EUPL v1.1](https://raw.githubusercontent.com/irontec/node-isaac-parser/master/LICENSE.txt)

```
Copyright 2015 Irontec SL

Licensed under the EUPL, Version 1.1 or - as soon they will be approved by the European
Commission - subsequent versions of the EUPL (the "Licence"); You may not use this work
except in compliance with the Licence.

You may obtain a copy of the Licence at:
http://ec.europa.eu/idabc/eupl.html

Unless required by applicable law or agreed to in writing, software distributed under 
the Licence is distributed on an "AS IS" basis, WITHOUT WARRANTIES OR CONDITIONS OF 
ANY KIND, either express or implied. See the Licence for the specific language 
governing permissions and limitations under the Licence.
```

[npm-url]: https://npmjs.org/package/isaac-wrapper.parser
[npm-image]: https://img.shields.io/npm/v/isaac-wrapper.parser.svg?style=flat-square

[travis-url]: https://travis-ci.org/irontec/isaac-wrapper.parser
[travis-image]: https://img.shields.io/travis/irontec/isaac-wrapper.parser.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/irontec/isaac-wrapper.parser
[coveralls-image]: https://img.shields.io/coveralls/irontec/isaac-wrapper.parser.svg?style=flat-square

[depstat-url]: https://david-dm.org/irontec/isaac-wrapper.parser
[depstat-image]: https://david-dm.org/irontec/isaac-wrapper.parser.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/isaac-wrapper.parser.svg?style=flat-square
