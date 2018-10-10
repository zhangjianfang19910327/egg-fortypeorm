# egg-fortypeorm

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]

[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-fortypeorm.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-fortypeorm
[travis-image]: https://img.shields.io/travis/zhangjianfang19910327/egg-fortypeorm.svg
[travis-url]: https://travis-ci.org/zhangjianfang19910327/egg-fortypeorm
[codecov-image]: https://img.shields.io/codecov/c/github/zhangjianfang19910327/egg-fortypeorm.svg?style=flat-square
[codecov-url]: https://codecov.io/github/zhangjianfang19910327/egg-fortypeorm?branch=master
[david-image]: https://img.shields.io/david/zhangjianfang19910327/egg-fortypeorm.svg?style=flat-square
[david-url]: https://david-dm.org/zhangjianfang19910327/egg-fortypeorm
[snyk-image]: https://snyk.io/test/npm/egg-fortypeorm/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-fortypeorm
[download-image]: https://img.shields.io/npm/dm/egg-fortypeorm.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-fortypeorm

<!--
Description here.
-->

## Install

```bash
$ npm i egg-fortypeorm --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.typeorm = {
  enable: true,
  package: 'egg-fortypeorm',
};
```

## Configuration

```js
// {app_root}/config/config.default.js example:
exports.typeorm = {
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "xxx",
    database: "test",
    synchronize: true,
    entities:[Photo]
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example
```js
export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    
    const photo = new Photo();
    photo.name = 'P1';
    photo.fileName = 'p1.png';
    photo.isPublished = true;
    photo.views = 0;
     ctx.body = await ctx.connection.manager.save(photo);
  }
}
```
<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
