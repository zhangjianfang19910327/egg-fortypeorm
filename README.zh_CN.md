# egg-typeorm

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]

[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-fortypeorm.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-fortypeorm
[travis-image]: https://img.shields.io/travis/zhangjianfang19910327/egg-fortypeorm.svg?branch=master
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

## 依赖说明

### 依赖的 egg 版本

egg-fortypeorm 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件
```js
    "mysql": "^2.16.0",
    "reflect-metadata": "^0.1.12",
    "typeorm": "^0.2.7"
```
## 开启插件

```js
// config/plugin.js
exports.typeorm = {
  enable: true,
  package: 'egg-fortypeorm',
};
```

## 使用场景
基于typeorm插件
关于typeorm插件的使用情况请走[这里](https://github.com/typeorm/typeorm)

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
## 详细配置
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
请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
