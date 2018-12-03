# Mock-proxy

一个小服务工具，便于客户端快速使用前端Mock数据，按mock的数据脱离后端接口进行开发的方案。同时集成了proxy方案，通过node层来做API的代理转发，解决浏览器端经常遇到的跨域问题。

## How to start

在代码目录下执行：

```
git clone https://github.com/TinyDurk/mock-proxy
cd mock-proxy
npm i
npm start
```

即可启动使用。

## Configure

path: ./configure/config.json

```json
{
  "useMock"     : true, // 开发时是否使用mock数据。true的时候，如果请求以data API里key为endpoint的接口，则使用mock数据，否则使用后端接口实际数据。false则统一使用后端接口实际数据。

  "PORT"        : 9100, // 本地mock服务期望使用的端口号，不要与开发时启动项目的node端口一致，否则端口会被占用。
  "TEST_REFERER": "http://test.demo.com", // 开发时测试机的域名
  "PROD_REFERER": "http://prod.demo.com" // 生产环境域名（如需使用生产域名，修改此值，同时使用 npm run mock:prod 命令启动服务，不用 npm start）
}

```

## How to extend and use

项目中实际需要高频使用的代码目录：

```
--data
|---- API         // 你的API目录，可以按项目需要随意组织，接口endpoint为key，value为期望的返回数据
|------ demo.js   // 一个示例
|---- extend.js   // 扩展mockjs里不支持的数据格式
|---- index.js    // 入口文件，需要集成API文件夹里所有的接口
```


## Test

按 How to start 执行之后，发起测试请求```localhost:9100/proxy/paper/list```，即可看到data/API/demo里定义的数据返回：

```
{
    "ret": 1,
    "data": {
        "total": 28,
        "offset": 10,
        "class_overviews": [
            {
                "author_id": 100132,
                "author_name": "Helen Brown",
                "class_id": "990000199705138799",
                "class_size": 2,
                "ct": "157656536345",
                "version": "v1.0",
                "relation_id": "Ab209717-fCA2-83b8-3d9A-f4dae8CfAf03",
                "ut": "697590662867"
            },
            ...
        ]
    }
}
```

## mockjs

mockjs 数据生成器工具已经造好了很多数据生产规则的轮子了，直接运用即可。

具体的数据生成器Mockjs的用法参看如下链接，主要弄清楚以下两点基本就可以覆盖所有需求了。
- [语法规范](https://github.com/nuysoft/Mock/wiki/Syntax-Specification)
- [Random及Extend method](https://github.com/nuysoft/Mock/wiki/Mock.Random)

## Others

使用中遇到任何问题可以直接在issue里反馈。

后续会做成一个 cli 工具脚手架，npm 安装后即可使用。
