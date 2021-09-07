# es-query-builder

用于构建ES查询条件组合 和逻辑条件表达式的组件

## 打包说明

* `npm run build`

    生成dist目录，内含打包后的js文件与`package.json`文件

    ```json
    |-- dist 打包生成目录
            |-- es-query-builder.js
            |-- es-query-builder.js.map
    |-- package.json
    |-- RREADME.md
    ```

* `npm pack`

  离线打包成带`.tgz`后缀的离线包，解压后格式与`dist`一致

## 运行调试

`npm run dev`

1. 修改根目录下的 `index.html` 文件中，`script`下的外部js文件名，与`dist`生成文件名保持一致

    ```html
    <script src="/dist/es-query-builder.js"></script>
    ```

2. 在`main.js`中引入组件，并全局挂载

    ```js
    import Vue from 'vue'
    import App from './App.vue'
    import ElementUI from 'element-ui';
    import '../node_modules/element-ui/lib/theme-chalk/index.css'

    import QueryBuilder from '../packages/es-query-builder'

    Vue.use(ElementUI);
    Vue.use(QueryBuilder);

    new Vue({
    el: '#app',
    render: h => h(App)
    })
    ```

3. 在`App.vue`中使用组件

    ```html
    <template>
        <div id="app">
            <query-builder></query-builder>
        </div>
    </template>
    ```

## 打包配置

* package.json

    ```json
    {
        "private": false,   // 组件是否私有，默认为true，需改成false才能发布
        "main": "dist/es-query-builder.js",    // 支持以包名形式引入的配置
        "files": [      // 加入打包的目录名
            "dist"
        ]
    }
    ```

* webpack.config.js

    ```js
    module.exports = {
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/dist/',
            filename: 'es-query-builder.js',  // 打包后生成的文件名
            library: 'es-query-builder', // 指定使用require时的模块名
            libraryTarget: 'umd', // libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
            umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
        },
    }
    ```

## 属性说明

* ref： **必填**，便于在外部调用组件内的方法来获取组件处理生成的表达式字符串
* maxDepth：最大深度，选填，目前暂未设置嵌套深度限制

## 方法说明

* 获取组件生成的表达式字符串（getQueryOutput）

    ```js
    //...
    <query-builder ref="EsQueryBuilder" />
    //..

    // 使用方式，方法会返回多级嵌套的规则对象
    const rules = this.$refs.EsQueryBuilder.getQueryOutput();
    ```

## 事件说明
