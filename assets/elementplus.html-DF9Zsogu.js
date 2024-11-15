import{_ as n,c as l,d as s,o as t}from"./app-CO53yQH6.js";const i={};function a(d,e){return t(),l("div",null,e[0]||(e[0]=[s(`<p>表格中图像显示</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line">  &lt;el-table-column width=&quot;180&quot;&gt;</span>
<span class="line">    &lt;template #default=&quot;scope&quot;&gt;</span>
<span class="line">      &lt;el-image preview-teleported :preview-src-list=&quot;srcList&quot; /&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">  &lt;/el-table-column&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">            &lt;el-table-column label=&quot;图标&quot; align=&quot;center&quot; prop=&quot;iconUrl&quot;&gt;</span>
<span class="line">              &lt;template #default=&quot;scope&quot;&gt;</span>
<span class="line">                &lt;el-image :src=&quot;baseUrl + scope.row.iconUrl&quot; :fit=&quot;fit&quot; :lazy=&quot;true&quot; preview-teleported</span>
<span class="line">                  :preview-src-list=&quot;[baseUrl + scope.row.iconUrl]&quot; style=&quot;height: 40px; width: 40px;&quot; /&gt;</span>
<span class="line">              &lt;/template&gt;</span>
<span class="line">            &lt;/el-table-column&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表格中 按钮隐藏</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">                &lt;el-dropdown&gt;</span>
<span class="line">                  &lt;span class=&quot;el-dropdown-link&quot; style=&quot;font-weight: bold;font-size: medium&quot;&gt;</span>
<span class="line">                    ...</span>
<span class="line">                  &lt;/span&gt;</span>
<span class="line">                  &lt;template #dropdown&gt;</span>
<span class="line">                    &lt;el-dropdown-menu&gt;</span>
<span class="line">                      &lt;!--                &lt;el-dropdown-item&gt;</span>
<span class="line">                                        &lt;el-button link type=&quot;primary&quot; icon=&quot;Edit&quot; @click=&quot;handleRunState(scope.row)&quot; v-hasPermi=&quot;[&#39;deployPlan:deployPlan:edit&#39;]&quot;&gt;运行状态&lt;/el-button&gt;</span>
<span class="line">                                      &lt;/el-dropdown-item&gt;--&gt;</span>
<span class="line">                      &lt;el-dropdown-item&gt;</span>
<span class="line">                        &lt;el-button link type=&quot;primary&quot; icon=&quot;View&quot; @click=&quot;handleView(scope.row, scope.index)&quot;</span>
<span class="line">                          v-hasPermi=&quot;[&#39;deployPlan:deployPlan:query&#39;]&quot;&gt;详细&lt;/el-button&gt;</span>
<span class="line">                      &lt;/el-dropdown-item&gt;</span>
<span class="line">                      &lt;el-dropdown-item&gt;</span>
<span class="line">                        &lt;el-button link type=&quot;primary&quot; icon=&quot;Edit&quot; @click=&quot;handleUpdate(scope.row)&quot;</span>
<span class="line">                          v-hasPermi=&quot;[&#39;deployPlan:deployPlan:edit&#39;]&quot;&gt;修改&lt;/el-button&gt;</span>
<span class="line">                      &lt;/el-dropdown-item&gt;</span>
<span class="line">                      &lt;el-dropdown-item&gt;</span>
<span class="line">                        &lt;el-button link type=&quot;danger&quot; icon=&quot;Delete&quot; @click=&quot;handleDelete(scope.row)&quot;</span>
<span class="line">                          v-hasPermi=&quot;[&#39;deployPlan:deployPlan:remove&#39;]&quot;&gt;删除&lt;/el-button&gt;</span>
<span class="line">                      &lt;/el-dropdown-item&gt;</span>
<span class="line">                    &lt;/el-dropdown-menu&gt;</span>
<span class="line">                  &lt;/template&gt;</span>
<span class="line">                &lt;/el-dropdown&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>隐藏超出文字</p><p>防止过长的文本导致布局问题，当计划名称超过 15 个字符时，会使用 <code>el-popover</code> 组件来显示完整名称，并在卡片标题中显示截断的文本</p>`,7)]))}const o=n(i,[["render",a],["__file","elementplus.html.vue"]]),c=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF/css%E6%A0%B7%E5%BC%8F/elementplus.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1731653163000,"contributors":[{"name":"miaol","email":"124034918@qq.com","commits":2,"url":"https://github.com/miaol"}]},"filePathRelative":"前端/css样式/elementplus.md","excerpt":"<p>表格中图像显示</p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\" data-title=\\"text\\"><pre><code><span class=\\"line\\"></span>\\n<span class=\\"line\\">  &lt;el-table-column width=\\"180\\"&gt;</span>\\n<span class=\\"line\\">    &lt;template #default=\\"scope\\"&gt;</span>\\n<span class=\\"line\\">      &lt;el-image preview-teleported :preview-src-list=\\"srcList\\" /&gt;</span>\\n<span class=\\"line\\">    &lt;/template&gt;</span>\\n<span class=\\"line\\">  &lt;/el-table-column&gt;</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{o as comp,c as data};
