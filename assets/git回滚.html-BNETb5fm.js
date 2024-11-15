import{_ as s,c as e,d as i,o as l}from"./app-B0PxVMas.js";const a={};function d(c,n){return l(),e("div",null,n[0]||(n[0]=[i(`<h2 id="reset-回滚" tabindex="-1"><a class="header-anchor" href="#reset-回滚"><span>reset 回滚</span></a></h2><ol><li><p><code>heard</code> 所有内容回滚到指定提交点。当前暂存区内容全部清空。 通俗一点就是所有内容回滚到指定节点，其他内容全部清空。</p></li><li><p><code>soft</code> 回滚到指定提交点后，在这个提交节点之后的文件全部变成暂存。当前暂存区内容（正在修改还没提交的内容）全部清空。</p></li><li><p><code>mixed</code> 回滚到指定提交点后，在这个提交节点之后的文件全部变成暂存。当前暂存区内容不变。</p></li></ol><blockquote><p><code>mixed</code>与<code>soft</code>区别在于是否保留当前正在修改，还未提交的代码。mixed保留，soft放弃保留。</p></blockquote><h2 id="常用情景示例" tabindex="-1"><a class="header-anchor" href="#常用情景示例"><span>常用情景示例</span></a></h2><h3 id="情景-开发人员新提交的代码导致线上问题" tabindex="-1"><a class="header-anchor" href="#情景-开发人员新提交的代码导致线上问题"><span>情景 - 开发人员新提交的代码导致线上问题</span></a></h3><p>作为运维</p><ol><li>先基于发布的分支创建一个新分支，保留源代码push到服务器。（保留原来数据，方便分析问题）</li><li>再切换到自动发布的分支，采用<code>heard</code> 方式回滚，回滚后强制提交。</li></ol><p>作为开发人员</p><ol><li>采用<code>soft</code> 或 <code>mixed</code>方式回滚，进行问题排查和bug修复。</li></ol><h3 id="情景-保密代码多人协同-无法联网-且不在同一局域网-拷贝自己开发的代码" tabindex="-1"><a class="header-anchor" href="#情景-保密代码多人协同-无法联网-且不在同一局域网-拷贝自己开发的代码"><span>情景 - 保密代码多人协同（无法联网，且不在同一局域网，拷贝自己开发的代码）</span></a></h3><p>采用<code>soft</code> 或 <code>mixed</code>方式回滚，回滚后使用下面脚本，将回滚后的所有文件copy到指定目录。</p><p>脚本使用说明：传入两个目录，一个源代码目录，一个输出目标目录</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#!/bin/bash</span>
<span class="line"></span>
<span class="line"># 检查是否提供了必要的参数</span>
<span class="line">if [ $# -ne 2 ]; then</span>
<span class="line">    echo &quot;使用方法: $0 &lt;源目录路径&gt; &lt;目标目录路径&gt;&quot;</span>
<span class="line">    exit 1</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line"># 源目录路径和目标目录路径</span>
<span class="line">source_dir=&quot;$1&quot;</span>
<span class="line">destination=&quot;$2&quot;</span>
<span class="line"></span>
<span class="line"># 检查源目录是否存在</span>
<span class="line">if [ ! -d &quot;$source_dir&quot; ]; then</span>
<span class="line">    echo &quot;错误: 源目录 &#39;$source_dir&#39; 不存在&quot;</span>
<span class="line">    exit 1</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line"># 日志文件路径（在目标目录下）</span>
<span class="line">log_file=&quot;$destination/deleteFile.log&quot;</span>
<span class="line"></span>
<span class="line"># 创建目标目录（如果不存在）</span>
<span class="line">mkdir -p &quot;$destination&quot;</span>
<span class="line"></span>
<span class="line"># 初始化日志文件</span>
<span class="line">&gt; &quot;$log_file&quot;</span>
<span class="line"></span>
<span class="line"># 切换到源目录</span>
<span class="line">cd &quot;$source_dir&quot; || exit 1</span>
<span class="line"></span>
<span class="line"># 获取暂存区的文件列表</span>
<span class="line">files=$(git diff --cached --name-only)</span>
<span class="line"></span>
<span class="line"># 复制每个文件到目标目录，并保留目录结构</span>
<span class="line">for file in $files; do</span>
<span class="line">  # 检查文件是否存在</span>
<span class="line">  if [ -e &quot;$file&quot; ]; then</span>
<span class="line">    # 确保目标目录存在</span>
<span class="line">    target_dir=&quot;$destination/$(dirname &quot;$file&quot;)&quot;</span>
<span class="line">    mkdir -p &quot;$target_dir&quot;</span>
<span class="line"></span>
<span class="line">    # 复制文件</span>
<span class="line">    cp -r &quot;$file&quot; &quot;$target_dir&quot;</span>
<span class="line">  else</span>
<span class="line">    # 如果文件不存在，记录到日志文件</span>
<span class="line">    echo &quot;$file&quot; &gt;&gt; &quot;$log_file&quot;</span>
<span class="line">  fi</span>
<span class="line">done</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const p=s(a,[["render",d],["__file","git回滚.html.vue"]]),o=JSON.parse('{"path":"/%E5%B8%B8%E7%94%A8%E5%B7%A5%E5%85%B7%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7/git%E5%9B%9E%E6%BB%9A.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"reset 回滚","slug":"reset-回滚","link":"#reset-回滚","children":[]},{"level":2,"title":"常用情景示例","slug":"常用情景示例","link":"#常用情景示例","children":[{"level":3,"title":"情景 - 开发人员新提交的代码导致线上问题","slug":"情景-开发人员新提交的代码导致线上问题","link":"#情景-开发人员新提交的代码导致线上问题","children":[]},{"level":3,"title":"情景 - 保密代码多人协同（无法联网，且不在同一局域网，拷贝自己开发的代码）","slug":"情景-保密代码多人协同-无法联网-且不在同一局域网-拷贝自己开发的代码","link":"#情景-保密代码多人协同-无法联网-且不在同一局域网-拷贝自己开发的代码","children":[]}]}],"git":{"updatedTime":1731652908000,"contributors":[{"name":"miaol","email":"124034918@qq.com","commits":4,"url":"https://github.com/miaol"}]},"filePathRelative":"常用工具使用技巧/git回滚.md","excerpt":"<h2>reset 回滚</h2>\\n<ol>\\n<li>\\n<p><code>heard</code> 所有内容回滚到指定提交点。当前暂存区内容全部清空。 通俗一点就是所有内容回滚到指定节点，其他内容全部清空。</p>\\n</li>\\n<li>\\n<p><code>soft</code> 回滚到指定提交点后，在这个提交节点之后的文件全部变成暂存。当前暂存区内容（正在修改还没提交的内容）全部清空。</p>\\n</li>\\n<li>\\n<p><code>mixed</code> 回滚到指定提交点后，在这个提交节点之后的文件全部变成暂存。当前暂存区内容不变。</p>\\n</li>\\n</ol>\\n<blockquote>\\n<p><code>mixed</code>与<code>soft</code>区别在于是否保留当前正在修改，还未提交的代码。mixed保留，soft放弃保留。</p>\\n</blockquote>"}');export{p as comp,o as data};
