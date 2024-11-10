<template><div><h2 id="创建仓库" tabindex="-1"><a class="header-anchor" href="#创建仓库"><span>创建仓库</span></a></h2>
<p>用户名.github.io</p>
<h2 id="token创建" tabindex="-1"><a class="header-anchor" href="#token创建"><span>token创建</span></a></h2>
<p>settings</p>
<p>进入 左侧最下面  deploy</p>
<p>选择权限 点击生成</p>
<h2 id="填写token" tabindex="-1"><a class="header-anchor" href="#填写token"><span>填写token</span></a></h2>
<p>在仓库的配置中的Secrets and variables 中填上刚才的token</p>
<p>修改deploy-docs.yml</p>
<p>steps下面添加</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">        env:</span>
<span class="line">          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>
<span class="line">          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署分支确认" tabindex="-1"><a class="header-anchor" href="#部署分支确认"><span>部署分支确认</span></a></h2>
<p>默认是press 是发布到gh_pages</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">        with:</span>
<span class="line">          # 部署到 gh-pages 分支</span>
<span class="line">          target_branch: gh-pages</span>
<span class="line">          # 部署目录为 VuePress 的默认输出目录</span>
<span class="line">          build_dir: docs/.vuepress/dist</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/githubPages/image-20241110034622365.png" alt=""></p>
<h2 id="域名确认" tabindex="-1"><a class="header-anchor" href="#域名确认"><span>域名确认</span></a></h2>
<p>默认仓库 用户名.github.io</p>
<p>还可以创建 一个新仓库 设置为githubpages</p>
<p>区别在于要修改deploy-docs.yml</p>
<p>则将 <code v-pre>base</code> 设置为 <code v-pre>&quot;/&lt;REPO&gt;/&quot;</code></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">export default defineUserConfig({</span>
<span class="line">  base: '/'   // 默认是 /   指定仓库换成 /&lt;REPO>/</span>
<span class="line">  lang: 'en-US',</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>github 部署配置示例</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">name: docs</span>
<span class="line"></span>
<span class="line">on:</span>
<span class="line">  # 每当 push 到 main 分支时触发部署</span>
<span class="line">  push:</span>
<span class="line">    branches: [main]</span>
<span class="line">  # 手动触发部署</span>
<span class="line">  workflow_dispatch:</span>
<span class="line"></span>
<span class="line">jobs:</span>
<span class="line">  docs:</span>
<span class="line">    runs-on: ubuntu-latest</span>
<span class="line"></span>
<span class="line">    steps:</span>
<span class="line">      - uses: actions/checkout@v4</span>
<span class="line">        with:</span>
<span class="line">          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span>
<span class="line">          fetch-depth: 0</span>
<span class="line"></span>
<span class="line">      - name: Setup pnpm</span>
<span class="line">        uses: pnpm/action-setup@v2</span>
<span class="line">        with:</span>
<span class="line">          # 选择要使用的 pnpm 版本</span>
<span class="line">          version: 8</span>
<span class="line">          # 使用 pnpm 安装依赖</span>
<span class="line">          run_install: true</span>
<span class="line"></span>
<span class="line">      - name: Setup Node.js</span>
<span class="line">        uses: actions/setup-node@v4</span>
<span class="line">        with:</span>
<span class="line">          # 选择要使用的 node 版本</span>
<span class="line">          node-version: 20</span>
<span class="line">          # 缓存 pnpm 依赖</span>
<span class="line">          cache: pnpm</span>
<span class="line"></span>
<span class="line">      # 运行构建脚本</span>
<span class="line">      - name: Build VuePress site</span>
<span class="line">        run: pnpm docs:build</span>
<span class="line"></span>
<span class="line">      # 查看 workflow 的文档来获取更多信息</span>
<span class="line">      # @see https://github.com/crazy-max/ghaction-github-pages</span>
<span class="line">      - name: Deploy to GitHub Pages</span>
<span class="line">        uses: crazy-max/ghaction-github-pages@v4</span>
<span class="line">        with:</span>
<span class="line">          # 部署到 gh-pages 分支</span>
<span class="line">          target_branch: gh-pages</span>
<span class="line">          # 部署目录为 VuePress 的默认输出目录</span>
<span class="line">          build_dir: docs/.vuepress/dist</span>
<span class="line">        env:</span>
<span class="line">          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>
<span class="line">          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


