## 项目创建

```sh
pnpm create vuepress 项目名称
pnpm add -D sass

```

目录结构

```
├─ docs     --- 目录是你放置 Markdown 文件的地方，它同时也会作为 VuePress 的源文件目录。
│  ├─ .vuepress  ---即源文件目录下的 .vuepress 目录，是放置所有和 VuePress 相关的文件的地方
│  │  └─ config.js
│  └─ README.md
└─ package.json
```

启动开发服务器
```sh
pnpm docs:dev
```
构建  
```
pnpm docs:build
```
> 在 docs/.vuepress/dist 目录中可以找到构建生成的静态文件


## 配置

VuePress 站点的基本配置文件是 .vuepress/config.js

支持 TypeScript 配置文件，可以使用 .vuepress/config.ts

基础的配置文件
``` 
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),

  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
})
```

### 客户端配置

客户端配置文件
在大多数情况下，配置文件已经足够帮助你配置好你的 VuePress 站点。不过，有些时候用户们可能希望直接添加一些客户端代码
```
├─ docs
│  ├─ .vuepress
│  │  ├─ client.js   <--- 客户端配置文件
│  │  └─ config.js   <--- 配置文件
│  └─ README.md
├─ .gitignore
└─ package.json
```

客户端配置 示例
```
import { defineClientConfig } from 'vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  rootComponents: [],
})
```



## 页面

项目中的每一个 Markdown 文件都是一个单独的页面

### 路由

示例文件结构

```
└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  └─ README.md
   ├─ contributing.md
   └─ README.md
```

将 `docs` 目录作为 sourceDir

| 相对路径                    | 路由路径                      |
| --------------------------- | ----------------------------- |
| `/README.md`                | `/`                           |
| `/index.md`                 | `/`                           |
| `/contributing.md`          | `/contributing.html`          |
| `/guide/README.md`          | `/guide/`                     |
| `/guide/getting-started.md` | `/guide/getting-started.html` |

> 默认配置下， `README.md` 和 `index.md` 都会被转换成 `index.html` ，并且其对应的路由路径都是由斜杠结尾的

### Frontmatter

Frontmatter 必须在 Markdown 文件的顶部，并且被包裹在一对三短划线中间

```
---
lang: zh-CN
title: 页面的标题
description: 页面的描述
---
```

> 通过 Frontmatter 来覆盖当前页面的 `lang`, `title`, `description` 等属性。因此，可以把 Frontmatter 当作页面级作用域的配置。

### 内容

页面的主要内容是使用 Markdown 书写的。VuePress 首先会将 Markdown 转换为 HTML ，然后将 HTML 作为 Vue 单文件组件的 `<template>` 。



## 多语言支持

### 站点多语言配置

```
docs
├─ README.md
├─ foo.md
├─ nested
│  └─ README.md
└─ zh
   ├─ README.md
   ├─ foo.md
   └─ nested
      └─ README.md
```

 配置文件中设置 `locales` 选项

```
export default {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器',
    },
  },
}
```

如果一个语言没有声明 `lang`, `title`, `description` 或者 `head` ，VuePress 将会尝试使用顶层配置的对应值。如果每个语言都声明了这些值，那么顶层配置中的对应值可以被省略

### 主题多语言配置

```
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/zh/': {
        selectLanguageName: '简体中文',
      },
    },
  }),
})
```

## 部署

如果你准备发布到 `https://<USERNAME>.github.io/` ，你可以省略这一步，因为 `base` 默认就是 `"/"` 。

如果你准备发布到 `https://<USERNAME>.github.io/<REPO>/` ，也就是说你的仓库地址是 `https://github.com/<USERNAME>/<REPO>` ，则将 `base` 设置为 `"/<REPO>/"`。



### 热部署

由于本身没有实时更新，写文档的时候看不到效果，所以还是得自己配置：

```
"scripts": {
  "blogs:dev": "vuepress dev blogs --open --host \"localhost\" --temp .temp",
  "blogs:build": "vuepress build blogs"
},
```



## 主题

VuePress 提供了一个默认主题

你需要在你的配置文件中通过 [theme](https://vuepress.vuejs.org/zh/reference/config.html#theme) 配置项来使用它

```
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
  }),
})
```



## 插件

 VuePress 插件可以为你提供各种不同的功能

VuePress 团队提供了一些官方插件

```
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default {
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-XXXXXXXXXX',
    }),
  ],
}
```

vuepress 插件市场

自定义插件

```
import myPlugin from './path/to/my-plugin.js'

export default {
  plugins: [myPlugin()],
}
```

