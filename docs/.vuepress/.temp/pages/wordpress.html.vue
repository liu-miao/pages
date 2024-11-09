<template><div><h2 id="项目创建" tabindex="-1"><a class="header-anchor" href="#项目创建"><span>项目创建</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">pnpm</span> create vuepress 项目名称</span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> sass</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目录结构</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">├─ docs     --- 目录是你放置 Markdown 文件的地方，它同时也会作为 VuePress 的源文件目录。</span>
<span class="line">│  ├─ .vuepress  ---即源文件目录下的 .vuepress 目录，是放置所有和 VuePress 相关的文件的地方</span>
<span class="line">│  │  └─ config.js</span>
<span class="line">│  └─ README.md</span>
<span class="line">└─ package.json</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动开发服务器</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">pnpm</span> docs:dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>构建</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">pnpm docs:build</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>在 docs/.vuepress/dist 目录中可以找到构建生成的静态文件</p>
</blockquote>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>VuePress 站点的基本配置文件是 .vuepress/config.js</p>
<p>支持 TypeScript 配置文件，可以使用 .vuepress/config.ts</p>
<p>基础的配置文件</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">import { viteBundler } from '@vuepress/bundler-vite'</span>
<span class="line">import { defaultTheme } from '@vuepress/theme-default'</span>
<span class="line">import { defineUserConfig } from 'vuepress'</span>
<span class="line"></span>
<span class="line">export default defineUserConfig({</span>
<span class="line">  bundler: viteBundler(),</span>
<span class="line">  theme: defaultTheme(),</span>
<span class="line"></span>
<span class="line">  lang: 'zh-CN',</span>
<span class="line">  title: '你好， VuePress ！',</span>
<span class="line">  description: '这是我的第一个 VuePress 站点',</span>
<span class="line">})</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置"><span>客户端配置</span></a></h3>
<p>客户端配置文件
在大多数情况下，配置文件已经足够帮助你配置好你的 VuePress 站点。不过，有些时候用户们可能希望直接添加一些客户端代码</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">├─ docs</span>
<span class="line">│  ├─ .vuepress</span>
<span class="line">│  │  ├─ client.js   &lt;--- 客户端配置文件</span>
<span class="line">│  │  └─ config.js   &lt;--- 配置文件</span>
<span class="line">│  └─ README.md</span>
<span class="line">├─ .gitignore</span>
<span class="line">└─ package.json</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端配置 示例</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">import { defineClientConfig } from 'vuepress/client'</span>
<span class="line"></span>
<span class="line">export default defineClientConfig({</span>
<span class="line">  enhance({ app, router, siteData }) {},</span>
<span class="line">  setup() {},</span>
<span class="line">  rootComponents: [],</span>
<span class="line">})</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面" tabindex="-1"><a class="header-anchor" href="#页面"><span>页面</span></a></h2>
<p>项目中的每一个 Markdown 文件都是一个单独的页面</p>
<h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由"><span>路由</span></a></h3>
<p>示例文件结构</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">└─ docs</span>
<span class="line">   ├─ guide</span>
<span class="line">   │  ├─ getting-started.md</span>
<span class="line">   │  └─ README.md</span>
<span class="line">   ├─ contributing.md</span>
<span class="line">   └─ README.md</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <code v-pre>docs</code> 目录作为 sourceDir</p>
<table>
<thead>
<tr>
<th>相对路径</th>
<th>路由路径</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/README.md</code></td>
<td><code v-pre>/</code></td>
</tr>
<tr>
<td><code v-pre>/index.md</code></td>
<td><code v-pre>/</code></td>
</tr>
<tr>
<td><code v-pre>/contributing.md</code></td>
<td><code v-pre>/contributing.html</code></td>
</tr>
<tr>
<td><code v-pre>/guide/README.md</code></td>
<td><code v-pre>/guide/</code></td>
</tr>
<tr>
<td><code v-pre>/guide/getting-started.md</code></td>
<td><code v-pre>/guide/getting-started.html</code></td>
</tr>
</tbody>
</table>
<blockquote>
<p>默认配置下， <code v-pre>README.md</code> 和 <code v-pre>index.md</code> 都会被转换成 <code v-pre>index.html</code> ，并且其对应的路由路径都是由斜杠结尾的</p>
</blockquote>
<h3 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h3>
<p>Frontmatter 必须在 Markdown 文件的顶部，并且被包裹在一对三短划线中间</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">---</span>
<span class="line">lang: zh-CN</span>
<span class="line">title: 页面的标题</span>
<span class="line">description: 页面的描述</span>
<span class="line">---</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>通过 Frontmatter 来覆盖当前页面的 <code v-pre>lang</code>, <code v-pre>title</code>, <code v-pre>description</code> 等属性。因此，可以把 Frontmatter 当作页面级作用域的配置。</p>
</blockquote>
<h3 id="内容" tabindex="-1"><a class="header-anchor" href="#内容"><span>内容</span></a></h3>
<p>页面的主要内容是使用 Markdown 书写的。VuePress 首先会将 Markdown 转换为 HTML ，然后将 HTML 作为 Vue 单文件组件的 <code v-pre>&lt;template&gt;</code> 。</p>
<h2 id="多语言支持" tabindex="-1"><a class="header-anchor" href="#多语言支持"><span>多语言支持</span></a></h2>
<h3 id="站点多语言配置" tabindex="-1"><a class="header-anchor" href="#站点多语言配置"><span>站点多语言配置</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">docs</span>
<span class="line">├─ README.md</span>
<span class="line">├─ foo.md</span>
<span class="line">├─ nested</span>
<span class="line">│  └─ README.md</span>
<span class="line">└─ zh</span>
<span class="line">   ├─ README.md</span>
<span class="line">   ├─ foo.md</span>
<span class="line">   └─ nested</span>
<span class="line">      └─ README.md</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件中设置 <code v-pre>locales</code> 选项</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">export default {</span>
<span class="line">  locales: {</span>
<span class="line">    // 键名是该语言所属的子路径</span>
<span class="line">    // 作为特例，默认语言可以使用 '/' 作为其路径。</span>
<span class="line">    '/': {</span>
<span class="line">      lang: 'en-US',</span>
<span class="line">      title: 'VuePress',</span>
<span class="line">      description: 'Vue-powered Static Site Generator',</span>
<span class="line">    },</span>
<span class="line">    '/zh/': {</span>
<span class="line">      lang: 'zh-CN',</span>
<span class="line">      title: 'VuePress',</span>
<span class="line">      description: 'Vue 驱动的静态网站生成器',</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个语言没有声明 <code v-pre>lang</code>, <code v-pre>title</code>, <code v-pre>description</code> 或者 <code v-pre>head</code> ，VuePress 将会尝试使用顶层配置的对应值。如果每个语言都声明了这些值，那么顶层配置中的对应值可以被省略</p>
<h3 id="主题多语言配置" tabindex="-1"><a class="header-anchor" href="#主题多语言配置"><span>主题多语言配置</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">import { defaultTheme } from '@vuepress/theme-default'</span>
<span class="line">import { defineUserConfig } from 'vuepress'</span>
<span class="line"></span>
<span class="line">export default defineUserConfig({</span>
<span class="line">  theme: defaultTheme({</span>
<span class="line">    locales: {</span>
<span class="line">      '/': {</span>
<span class="line">        selectLanguageName: 'English',</span>
<span class="line">      },</span>
<span class="line">      '/zh/': {</span>
<span class="line">        selectLanguageName: '简体中文',</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">  }),</span>
<span class="line">})</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h2>
<p>如果你准备发布到 <code v-pre>https://&lt;USERNAME&gt;.github.io/</code> ，你可以省略这一步，因为 <code v-pre>base</code> 默认就是 <code v-pre>&quot;/&quot;</code> 。</p>
<p>如果你准备发布到 <code v-pre>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code> ，也就是说你的仓库地址是 <code v-pre>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> ，则将 <code v-pre>base</code> 设置为 <code v-pre>&quot;/&lt;REPO&gt;/&quot;</code>。</p>
<h3 id="热部署" tabindex="-1"><a class="header-anchor" href="#热部署"><span>热部署</span></a></h3>
<p>由于本身没有实时更新，写文档的时候看不到效果，所以还是得自己配置：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">"scripts": {</span>
<span class="line">  "blogs:dev": "vuepress dev blogs --open --host \"localhost\" --temp .temp",</span>
<span class="line">  "blogs:build": "vuepress build blogs"</span>
<span class="line">},</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主题" tabindex="-1"><a class="header-anchor" href="#主题"><span>主题</span></a></h2>
<p>VuePress 提供了一个默认主题</p>
<p>你需要在你的配置文件中通过 <a href="https://vuepress.vuejs.org/zh/reference/config.html#theme" target="_blank" rel="noopener noreferrer">theme</a> 配置项来使用它</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">import { defaultTheme } from '@vuepress/theme-default'</span>
<span class="line">import { defineUserConfig } from 'vuepress'</span>
<span class="line"></span>
<span class="line">export default defineUserConfig({</span>
<span class="line">  theme: defaultTheme({</span>
<span class="line">    // 默认主题配置</span>
<span class="line">    navbar: [</span>
<span class="line">      {</span>
<span class="line">        text: '首页',</span>
<span class="line">        link: '/',</span>
<span class="line">      },</span>
<span class="line">    ],</span>
<span class="line">  }),</span>
<span class="line">})</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件"><span>插件</span></a></h2>
<p>VuePress 插件可以为你提供各种不同的功能</p>
<p>VuePress 团队提供了一些官方插件</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'</span>
<span class="line"></span>
<span class="line">export default {</span>
<span class="line">  plugins: [</span>
<span class="line">    googleAnalyticsPlugin({</span>
<span class="line">      id: 'G-XXXXXXXXXX',</span>
<span class="line">    }),</span>
<span class="line">  ],</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vuepress 插件市场</p>
<p>自定义插件</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">import myPlugin from './path/to/my-plugin.js'</span>
<span class="line"></span>
<span class="line">export default {</span>
<span class="line">  plugins: [myPlugin()],</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


