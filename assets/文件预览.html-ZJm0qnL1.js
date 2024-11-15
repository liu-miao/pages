import{_ as l,c as n,d as s,o as i}from"./app-n5mMeFzf.js";const a={};function t(p,e){return i(),n("div",null,e[0]||(e[0]=[s(`<p>excel</p><p>解析内容用xlsx</p><p>预览</p><p>通用 xlsx</p><p>vue3 @vue-office/excel</p><p>react react-file-viewer</p><ol><li><p>blob 文件流</p></li><li><p>arrayBuffer</p></li><li><p>read方法读取为book对象</p></li><li><p>提取出对应sheet对象</p><ol><li>输出为html或者json</li><li>创建workbook <ol><li>输出为excel</li></ol></li></ol></li></ol><p>预览</p><p>文件 转为base64 dataurl 预览</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">const fr = new FileReader();</span>
<span class="line">fr.readAsDataURL(文件)</span>
<span class="line">fr.onload = (e) =&gt;{</span>
<span class="line">  this.excelSrc = e.target.result</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue-office</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">pnpm install @vue-office/excel</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>代码示例</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;vue-office-excel :src=&quot;excel&quot; @rendered=&quot;rendered&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">import VueOfficeExcel from &#39;@vue-office/excel&#39;;</span>
<span class="line">import &#39;@vue-office/excel/lib/index.css&#39;;</span>
<span class="line">const excel = &#39;http://static.shanhuxueyuan.com/demo/excel.xlsx&#39;;</span>
<span class="line">const rendered = () =&gt; {</span>
<span class="line">  console.log(&quot;渲染完成&quot;);</span>
<span class="line">};</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14)]))}const r=l(a,[["render",t],["__file","文件预览.html.vue"]]),d=JSON.parse('{"path":"/vue3/%E6%96%87%E4%BB%B6%E9%A2%84%E8%A7%88.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1731592525000,"contributors":[{"name":"miaol","email":"124034918@qq.com","commits":1,"url":"https://github.com/miaol"}]},"filePathRelative":"vue3/文件预览.md","excerpt":"<p>excel</p>\\n<p>解析内容用xlsx</p>\\n<p>预览</p>\\n<p>通用  xlsx</p>\\n<p>vue3   @vue-office/excel</p>\\n<p>react  react-file-viewer</p>\\n<ol>\\n<li>\\n<p>blob 文件流</p>\\n</li>\\n<li>\\n<p>arrayBuffer</p>\\n</li>\\n<li>\\n<p>read方法读取为book对象</p>\\n</li>\\n<li>\\n<p>提取出对应sheet对象</p>\\n<ol>\\n<li>输出为html或者json</li>\\n<li>创建workbook\\n<ol>\\n<li>输出为excel</li>\\n</ol>\\n</li>\\n</ol>\\n</li>\\n</ol>"}');export{r as comp,d as data};
