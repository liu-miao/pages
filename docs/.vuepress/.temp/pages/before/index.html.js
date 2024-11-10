import comp from "E:/HD/project/blogVuepress/docs/.vuepress/.temp/pages/before/index.html.vue"
const data = JSON.parse("{\"path\":\"/before/\",\"title\":\"Timeline\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Timeline\",\"sidebar\":false,\"blog\":{\"type\":\"type\",\"key\":\"before\"},\"layout\":\"Timeline\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
