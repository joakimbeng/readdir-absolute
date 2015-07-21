# readdir-absolute

[![NPM version][npm-image]][npm-url]

> As fs.readdir but it returns absolute paths

## Installation

Install `readdir-absolute` using [npm](https://www.npmjs.com/):

```bash
npm install --save readdir-absolute
```

## Usage

### Module usage

```javascript
var readdir = require('readdir-absolute');

readdir('/folder', function (err, files) {
  // files = ['/folder/file1', '/folder/file2', ...]
});
```

## API

### `readdirAbsolute(dir, cb)`

| Name | Type |
|------|------|
| dir | `String` |
| cb | `Function` |

See [fs.readdir](https://nodejs.org/api/fs.html#fs_fs_readdir_path_callback) documentation.

## License

MIT

[npm-url]: https://npmjs.org/package/readdir-absolute
[npm-image]: https://badge.fury.io/js/readdir-absolute.svg

