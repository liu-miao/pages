import{_ as s,c as a,d as n,o as i}from"./app-mxM55UQx.js";const l={};function t(d,e){return i(),a("div",null,e[0]||(e[0]=[n(`<p>父组件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">    &lt;ShowTaskView v-model:visible=&quot;taskVisible&quot; :taskChartData=&quot;taskChartData&quot; @update=&quot;handleUpdateRgb&quot; /&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>子组件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line"></span>
<span class="line">const props = defineProps({</span>
<span class="line">  visible: {</span>
<span class="line">    type: Boolean,</span>
<span class="line">    required: true</span>
<span class="line">  },</span>
<span class="line">  taskChartData: {</span>
<span class="line">    type: Object,</span>
<span class="line">    required: true</span>
<span class="line">  }</span>
<span class="line">})</span>
<span class="line">const emit = defineEmits([&#39;update:visible&#39;, &#39;update:taskChartData&#39;])</span>
<span class="line"></span>
<span class="line">// 子组件 使用数据 </span>
<span class="line">props.taskChartData </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:taskChartData 绑定 &quot;taskChartData&quot; 这个的数据</p><p>父组件 会将 :taskChartData 传递给 子组件，使用的数据是taskChartData</p><h2 id="函数传递" tabindex="-1"><a class="header-anchor" href="#函数传递"><span>函数传递</span></a></h2><h3 id="父组件向子组件提供函数" tabindex="-1"><a class="header-anchor" href="#父组件向子组件提供函数"><span>父组件向子组件提供函数</span></a></h3><p>父</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">const getType = () =&gt; {</span>
<span class="line">  return dialogType.value</span>
<span class="line">}</span>
<span class="line">provide(&#39;getType&#39;, getType)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">const getType = inject(&#39;getType&#39;)</span>
<span class="line">const title = computed(() =&gt; {</span>
<span class="line">  return getType() === &#39;detail&#39; ? &#39;查看任务属性&#39; : &#39;定义任务属&#39;</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子向父传" tabindex="-1"><a class="header-anchor" href="#子向父传"><span>子向父传</span></a></h3>`,13)]))}const p=s(l,[["render",t],["__file","父子传递.html.vue"]]),c=JSON.parse('{"path":"/vue3/%E7%88%B6%E5%AD%90%E4%BC%A0%E9%80%92.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"函数传递","slug":"函数传递","link":"#函数传递","children":[{"level":3,"title":"父组件向子组件提供函数","slug":"父组件向子组件提供函数","link":"#父组件向子组件提供函数","children":[]},{"level":3,"title":"子向父传","slug":"子向父传","link":"#子向父传","children":[]}]}],"git":{"updatedTime":1731592525000,"contributors":[{"name":"miaol","email":"124034918@qq.com","commits":1,"url":"https://github.com/miaol"}]},"filePathRelative":"vue3/父子传递.md","excerpt":"<p>父组件</p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\" data-title=\\"text\\"><pre><code><span class=\\"line\\">    &lt;ShowTaskView v-model:visible=\\"taskVisible\\" :taskChartData=\\"taskChartData\\" @update=\\"handleUpdateRgb\\" /&gt;</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{p as comp,c as data};
