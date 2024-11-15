import{_ as s,c as l,d as e,o as a}from"./app-n5mMeFzf.js";const i={};function d(t,n){return a(),l("div",null,n[0]||(n[0]=[e(`<p>element 固定表头滚动条效果</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">    &lt;!-- 传递关系对话框 --&gt;</span>
<span class="line">    &lt;el-dialog v-model=&quot;relationDialogVisible&quot; title=&quot;传递关系&quot; width=&quot;800px&quot; append-to-body&gt;</span>
<span class="line">      &lt;!-- 添加一个固定高度的容器 --&gt;</span>
<span class="line">      &lt;div class=&quot;relation-table-container&quot;&gt;</span>
<span class="line">        &lt;el-table </span>
<span class="line">          v-loading=&quot;loading&quot; </span>
<span class="line">          :data=&quot;relationTableValue&quot; </span>
<span class="line">          row-key=&quot;id&quot;</span>
<span class="line">          :max-height=&quot;400&quot;  </span>
<span class="line">        &gt;</span>
<span class="line">          &lt;el-table-column v-for=&quot;(header, index) in relationTableHeader&quot; </span>
<span class="line">            :key=&quot;index&quot; </span>
<span class="line">            :label=&quot;header.name&quot; </span>
<span class="line">            align=&quot;center&quot;</span>
<span class="line">            :prop=&quot;header.name&quot;&gt;</span>
<span class="line">            &lt;template #default=&quot;scope&quot;&gt;</span>
<span class="line">              &lt;div @dblclick=&quot;handleCellDblClick(scope.row, header.name, scope.$index)&quot;</span>
<span class="line">                :class=&quot;getCellClass(scope.row[header.name])&quot;</span>
<span class="line">                style=&quot;width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;&quot;&gt;</span>
<span class="line">                &lt;!-- 如果当前单元格正在编辑，显示下拉框 --&gt;</span>
<span class="line">                &lt;el-select v-if=&quot;editingCell.rowIndex === scope.$index &amp;&amp; editingCell.column === header.name&quot;</span>
<span class="line">                  v-model=&quot;editingCell.value&quot;</span>
<span class="line">                  @change=&quot;handleValueChange&quot;</span>
<span class="line">                  @blur=&quot;handleSelectBlur&quot;</span>
<span class="line">                  ref=&quot;selectRef&quot;</span>
<span class="line">                  size=&quot;small&quot;</span>
<span class="line">                  style=&quot;width: 100%&quot;&gt;</span>
<span class="line">                  &lt;el-option label=&quot;R&quot; :value=&quot;0&quot; /&gt;</span>
<span class="line">                  &lt;el-option label=&quot;G&quot; :value=&quot;1&quot; /&gt;</span>
<span class="line">                  &lt;el-option label=&quot;B&quot; :value=&quot;2&quot; /&gt;</span>
<span class="line">                &lt;/el-select&gt;</span>
<span class="line">                &lt;!-- 否则显示普通文本 --&gt;</span>
<span class="line">                &lt;template v-else&gt;</span>
<span class="line">                  {{ getDisplayValue(scope.row[header.name]) }}</span>
<span class="line">                &lt;/template&gt;</span>
<span class="line">              &lt;/div&gt;</span>
<span class="line">            &lt;/template&gt;</span>
<span class="line">          &lt;/el-table-column&gt;</span>
<span class="line">        &lt;/el-table&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">      &lt;template #footer&gt;</span>
<span class="line">        &lt;div class=&quot;dialog-footer&quot;&gt;</span>
<span class="line">          &lt;el-button @click=&quot;relationDialogVisible = false&quot;&gt;关闭&lt;/el-button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">      &lt;/template&gt;</span>
<span class="line">    &lt;/el-dialog&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// 添加传递关系表格容器样式</span>
<span class="line">.relation-table-container {</span>
<span class="line">  width: 100%;</span>
<span class="line">  // 移除固定高度，让表格自己控制</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 自定义滚动条样式</span>
<span class="line">.relation-table-container::-webkit-scrollbar {</span>
<span class="line">  width: 6px;  // 滚动条宽度</span>
<span class="line">  height: 6px; // 滚动条高度</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.relation-table-container::-webkit-scrollbar-thumb {</span>
<span class="line">  background: #ddd;  // 滚动条颜色</span>
<span class="line">  border-radius: 3px; // 滚动条圆角</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.relation-table-container::-webkit-scrollbar-track {</span>
<span class="line">  background: #f5f5f5; // 滚动条轨道颜色</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 确保对话框内容不会溢出</span>
<span class="line">:deep(.el-dialog__body) {</span>
<span class="line">  padding: 20px;</span>
<span class="line">  overflow: hidden;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 表格内容的样式</span>
<span class="line">:deep(.el-table) {</span>
<span class="line">  // 设置表格的最大高度，超出时显示滚动条</span>
<span class="line">  max-height: 400px;</span>
<span class="line">  overflow-y: auto;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 自定义滚动条样式</span>
<span class="line">:deep(.el-table__body-wrapper::-webkit-scrollbar) {</span>
<span class="line">  width: 6px;</span>
<span class="line">  height: 6px;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">:deep(.el-table__body-wrapper::-webkit-scrollbar-thumb) {</span>
<span class="line">  background: #ddd;</span>
<span class="line">  border-radius: 3px;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">:deep(.el-table__body-wrapper::-webkit-scrollbar-track) {</span>
<span class="line">  background: #f5f5f5;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const p=s(i,[["render",d],["__file","element 固定表头滚动条效果.html.vue"]]),v=JSON.parse('{"path":"/css%E6%A0%B7%E5%BC%8F/element%20%E5%9B%BA%E5%AE%9A%E8%A1%A8%E5%A4%B4%E6%BB%9A%E5%8A%A8%E6%9D%A1%E6%95%88%E6%9E%9C.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1731592525000,"contributors":[{"name":"miaol","email":"124034918@qq.com","commits":1,"url":"https://github.com/miaol"}]},"filePathRelative":"css样式/element 固定表头滚动条效果.md","excerpt":"<p>element 固定表头滚动条效果</p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\" data-title=\\"text\\"><pre><code><span class=\\"line\\">    &lt;!-- 传递关系对话框 --&gt;</span>\\n<span class=\\"line\\">    &lt;el-dialog v-model=\\"relationDialogVisible\\" title=\\"传递关系\\" width=\\"800px\\" append-to-body&gt;</span>\\n<span class=\\"line\\">      &lt;!-- 添加一个固定高度的容器 --&gt;</span>\\n<span class=\\"line\\">      &lt;div class=\\"relation-table-container\\"&gt;</span>\\n<span class=\\"line\\">        &lt;el-table </span>\\n<span class=\\"line\\">          v-loading=\\"loading\\" </span>\\n<span class=\\"line\\">          :data=\\"relationTableValue\\" </span>\\n<span class=\\"line\\">          row-key=\\"id\\"</span>\\n<span class=\\"line\\">          :max-height=\\"400\\"  </span>\\n<span class=\\"line\\">        &gt;</span>\\n<span class=\\"line\\">          &lt;el-table-column v-for=\\"(header, index) in relationTableHeader\\" </span>\\n<span class=\\"line\\">            :key=\\"index\\" </span>\\n<span class=\\"line\\">            :label=\\"header.name\\" </span>\\n<span class=\\"line\\">            align=\\"center\\"</span>\\n<span class=\\"line\\">            :prop=\\"header.name\\"&gt;</span>\\n<span class=\\"line\\">            &lt;template #default=\\"scope\\"&gt;</span>\\n<span class=\\"line\\">              &lt;div @dblclick=\\"handleCellDblClick(scope.row, header.name, scope.$index)\\"</span>\\n<span class=\\"line\\">                :class=\\"getCellClass(scope.row[header.name])\\"</span>\\n<span class=\\"line\\">                style=\\"width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;\\"&gt;</span>\\n<span class=\\"line\\">                &lt;!-- 如果当前单元格正在编辑，显示下拉框 --&gt;</span>\\n<span class=\\"line\\">                &lt;el-select v-if=\\"editingCell.rowIndex === scope.$index &amp;&amp; editingCell.column === header.name\\"</span>\\n<span class=\\"line\\">                  v-model=\\"editingCell.value\\"</span>\\n<span class=\\"line\\">                  @change=\\"handleValueChange\\"</span>\\n<span class=\\"line\\">                  @blur=\\"handleSelectBlur\\"</span>\\n<span class=\\"line\\">                  ref=\\"selectRef\\"</span>\\n<span class=\\"line\\">                  size=\\"small\\"</span>\\n<span class=\\"line\\">                  style=\\"width: 100%\\"&gt;</span>\\n<span class=\\"line\\">                  &lt;el-option label=\\"R\\" :value=\\"0\\" /&gt;</span>\\n<span class=\\"line\\">                  &lt;el-option label=\\"G\\" :value=\\"1\\" /&gt;</span>\\n<span class=\\"line\\">                  &lt;el-option label=\\"B\\" :value=\\"2\\" /&gt;</span>\\n<span class=\\"line\\">                &lt;/el-select&gt;</span>\\n<span class=\\"line\\">                &lt;!-- 否则显示普通文本 --&gt;</span>\\n<span class=\\"line\\">                &lt;template v-else&gt;</span>\\n<span class=\\"line\\">                  {{ getDisplayValue(scope.row[header.name]) }}</span>\\n<span class=\\"line\\">                &lt;/template&gt;</span>\\n<span class=\\"line\\">              &lt;/div&gt;</span>\\n<span class=\\"line\\">            &lt;/template&gt;</span>\\n<span class=\\"line\\">          &lt;/el-table-column&gt;</span>\\n<span class=\\"line\\">        &lt;/el-table&gt;</span>\\n<span class=\\"line\\">      &lt;/div&gt;</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">      &lt;template #footer&gt;</span>\\n<span class=\\"line\\">        &lt;div class=\\"dialog-footer\\"&gt;</span>\\n<span class=\\"line\\">          &lt;el-button @click=\\"relationDialogVisible = false\\"&gt;关闭&lt;/el-button&gt;</span>\\n<span class=\\"line\\">        &lt;/div&gt;</span>\\n<span class=\\"line\\">      &lt;/template&gt;</span>\\n<span class=\\"line\\">    &lt;/el-dialog&gt;</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{p as comp,v as data};
