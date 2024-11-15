## package.json

`package.json` 文件是 Node.js 项目中的一个重要文件，它存储了项目的元数据和配置信息。对于 Vue 3 项目来说，`package.json` 文件同样非常重要，因为它不仅包含了项目的依赖信息，还定义了项目的构建脚本和其他配置选项。



```
{
  "private": true,   // 
  "name": "my-vue3-project",  // 项目名称
  "version": "1.0.0",   // 项目的版本号 
  "description": "A Vue 3 project with TypeScript",   // 项目描述
  "keywords": ["vue", "typescript", "vite"],   // 项目关键字用于搜索引擎SEO
  "author": "John Doe <john.doe@example.com>",  // 项目作者
  "license": "MIT",   // 项目的许可证信息
  "dependencies": {  // 运行时依赖
    "vue": "^3.0.0",
    "axios": "^0.21.1"
  },
  "devDependencies": {   // 开发和构建时依赖
    "typescript": "^4.1.2",
    "eslint": "^7.10.0",
    "vite": "^2.0.0"
  },
  "scripts": {   // 脚本操作
    "serve": "vite",
    "build": "vite build",
    "lint": "eslint src --ext .js,.vue"
  },
  "main": "dist/index.js",   // 项目主入口
  "type": "module",   // 指定项目使用的模块系统 可以是 "commonjs" 或 "module"
  "browserslist": [   // 支持的浏览器范围 用于 Babel 和 PostCSS 等工具
    "> 1%",
    "last 2 versions",
    "not dead"
  ],
  "repository": {  // 仓库信息
    "type": "git",
    "url": "https://github.com/user/repo.git"
  },
  "homepage": "https://user.github.io/repo",   // 项目的主页 URL
   "workspaces":["packges"]   // 项目统一管理
}
```

## "commonjs" 与 "module"

### commonjs

 Node.js 默认的模块系统，主要用于服务器端的 JavaScript 代码。它的特点是同步加载模块。

1. **同步加载**：模块在加载时会阻塞后续代码的执行，直到模块加载完成。
2. **文件扩展名**：通常使用 `.js` 扩展名。
3. 导出方式
   - 使用 `module.exports` 导出模块。
   - 使用 `require` 导入模块。



### module

**ES Modules** 是 ECMAScript 标准的一部分，用于现代浏览器和 Node.js 的模块系统。它的特点是异步加载模块。

#### 特点

1. **异步加载**：模块在加载时不会阻塞后续代码的执行，而是异步加载。
2. **文件扩展名**：通常使用 `.mjs` 扩展名，或者在 `package.json` 中设置 `"type": "module"`。
3. 导出方式：
   - 使用 `export` 导出模块。
   - 使用 `import` 导入模块。



## workspace

`workspaces` 字段在 `package.json` 文件中用于定义一个单体仓库（monorepo）中的子包（sub-packages）。单体仓库是指在一个仓库中管理多个相关项目的开发模式。这种方式有助于共享代码、依赖管理和发布流程的标准化。

### `workspaces` 字段的作用

1. **依赖管理**：允许你在根项目的 `package.json` 中管理所有子包的依赖。
2. **脚本共享**：可以在根项目的 `package.json` 中定义脚本，这些脚本可以应用于所有子包。
3. **版本管理**：可以使用工具（如 `lerna`）来管理多个子包的版本和发布。

```
{
  "workspaces": [
    "packages/*"
  ]
}
```

在这个例子中，`packages` 文件夹下的所有子文件夹都被视为工作区（workspace）。

```
{
  "workspaces": {
    "packages": [
      "packages/*",
      "apps/*"
    ],
    "noHoist": [
      "**/eslint-config-custom",
      "**/eslint-plugin-react"
    ]
  }
}
```

在这个例子中，`packages` 和 `apps` 文件夹下的所有子文件夹都被视为工作区，而 `noHoist` 数组中的包不会被提升到根项目的 `node_modules` 中。

**示例**

```
my-monorepo/
├── package.json
├── packages/
│   ├── package-a/
│   │   ├── package.json
│   │   └── src/
│   ├── package-b/
│   │   ├── package.json
│   │   └── src/
├── apps/
│   ├── app-1/
│   │   ├── package.json
│   │   └── src/
│   └── app-2/
│       ├── package.json
│       └── src/
```

### 根项目的 `package.json`

json深色版本

```
{
  "name": "my-monorepo",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "packages/*",
    "apps/*"
  ],
  "devDependencies": {
    "eslint": "^7.32.0",
    "typescript": "^4.1.2"
  },
  "scripts": {
    "build": "lerna run build",
    "test": "lerna run test"
  }
}
```

### 子包的 `package.json`

#### `package-a/package.json`

json深色版本

```
{
  "name": "@my-monorepo/package-a",
  "version": "1.0.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "jest"
  },
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```

#### `app-1/package.json`

json深色版本

```
{
  "name": "@my-monorepo/app-1",
  "version": "1.0.0",
  "main": "dist/index.js",
  "scripts": {
    "start": "node dist/index.js",
    "build": "webpack"
  },
  "dependencies": {
    "@my-monorepo/package-a": "^1.0.0"
  }
}
```

> **`workspaces` 字段使得在单体仓库中管理多个子包变得更加方便和高效。通过在根项目的 `package.json` 中定义 `workspaces`，你可以集中管理依赖、脚本和版本，从而简化开发和发布流程。**

## module 字段

`module` 字段用于指定项目的 ES Module 入口点。这个字段通常用于库项目，以便在支持 ES Modules 的环境中正确加载库文件。`module` 字段补充了传统的 `main` 字段，后者通常用于指定 CommonJS 入口点。

### `module` 字段的作用

1. **ES Module 入口点**：指定项目的主要 ES Module 文件，通常是 `.mjs` 文件或带有 `"type": "module"` 的 `.js` 文件。
2. **兼容性**：允许库在支持 ES Modules 的环境中被正确识别和加载，同时保持对 CommonJS 环境的兼容性。

```
my-vue3-library/
├── package.json
├── src/
│   ├── index.js
│   └── index.d.ts
├── dist/
│   ├── index.cjs
│   └── index.mjs
```

```
{
  "name": "my-vue3-library",
  "version": "1.0.0",
  "description": "A Vue 3 library",
  "main": "dist/index.cjs",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "files": [
    "dist/"
  ],
  "scripts": {
    "build": "rollup -c",
    "prepublishOnly": "npm run build"
  },
  "dependencies": {
    "vue": "^3.0.0"
  },
  "devDependencies": {
    "rollup": "^2.60.0",
    "rollup-plugin-typescript2": "^0.30.0",
    "typescript": "^4.1.2"
  }
}
```

- **`main` 字段**：指定项目的 CommonJS 入口点。在这个例子中，`dist/index.cjs` 是编译后的 CommonJS 文件。
- **`module` 字段**：指定项目的 ES Module 入口点。在这个例子中，`dist/index.mjs` 是编译后的 ES Module 文件。
- **`types` 字段**：指定项目的 TypeScript 类型定义文件。在这个例子中，`dist/index.d.ts` 是类型定义文件。
- **`files` 字段**：指定要包含在 npm 发布包中的文件。在这个例子中，只有 `dist/` 文件夹中的文件会被包含。

### 构建

假设你使用 Rollup 进行构建，`rollup.config.js` 文件可能如下所示：

```
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    typescript({ useTsconfigDeclarationDir: true })
  ]
};
```

