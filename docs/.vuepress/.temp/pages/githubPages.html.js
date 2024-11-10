import comp from "E:/HD/project/blogVuepress/docs/.vuepress/.temp/pages/githubPages.html.vue"
const data = JSON.parse("{\"path\":\"/githubPages.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"创建仓库\",\"slug\":\"创建仓库\",\"link\":\"#创建仓库\",\"children\":[]},{\"level\":2,\"title\":\"token创建\",\"slug\":\"token创建\",\"link\":\"#token创建\",\"children\":[]},{\"level\":2,\"title\":\"填写token\",\"slug\":\"填写token\",\"link\":\"#填写token\",\"children\":[]},{\"level\":2,\"title\":\"部署分支确认\",\"slug\":\"部署分支确认\",\"link\":\"#部署分支确认\",\"children\":[]},{\"level\":2,\"title\":\"域名确认\",\"slug\":\"域名确认\",\"link\":\"#域名确认\",\"children\":[]}],\"git\":{\"updatedTime\":1731218418000,\"contributors\":[{\"name\":\"miaol\",\"email\":\"124034918@qq.com\",\"commits\":2,\"url\":\"https://github.com/miaol\"}]},\"filePathRelative\":\"githubPages.md\",\"excerpt\":\"<h2>创建仓库</h2>\\n<p>用户名.github.io</p>\\n<h2>token创建</h2>\\n<p>settings</p>\\n<p>进入 左侧最下面  deploy</p>\\n<p>选择权限 点击生成</p>\\n<h2>填写token</h2>\\n<p>在仓库的配置中的Secrets and variables 中填上刚才的token</p>\\n<p>修改deploy-docs.yml</p>\\n<p>steps下面添加</p>\\n<div class=\\\"language-text line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"text\\\" data-title=\\\"text\\\"><pre><code><span class=\\\"line\\\">        env:</span>\\n<span class=\\\"line\\\">          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>\\n<span class=\\\"line\\\">          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}</span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
