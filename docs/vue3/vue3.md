

## vue3 变化 

**Vue RFC（Request for Comments）是 Vue.js 社区用于讨论和提议新功能或改进现有功能的一个正式流程**。通过这个流程，开发者们可以提出他们的想法，详细描述这些想法的背景、动机和实现细节，并接受社区的反馈和讨论。这个过程确保了 Vue.js 的发展方向是社区驱动的，所有的新功能和改进都经过了充分的讨论和验证



## 数据劫持



vue3 采用代理

```

```



编译 优化



亮点

vue3采用CompositionApi 进行组织功能，相比optionsApi 类型推断更加方便， mixin 带来的	数据来源不清晰

增加Fragment , Teleport ， Suspense 组件。

ref 让 一个普通类型 变成响应式defpo

reactive 封装  





Monorepo 管理项目代码



## 响应式

reactive

shallowReactive 

readonly

shadlowReadonly





## 数据绑定

```
v-model:visible="isVisible" 是 v-model 的语法糖，等价于 :visible="isVisible" @update:visible="newValue => isVisible = newValue"。
```

