import fs from 'fs'
import path from 'path'

// 递归生成导航配置
export function generateNavbar(dirPath, baseUrl = '/') {
  const navItems = []
  const items = fs.readdirSync(dirPath)

  items.forEach(item => {
    const fullPath = path.join(dirPath, item)
    const stat = fs.statSync(fullPath)
    const relativePath = path.relative(process.cwd(), fullPath)

    // 排除.vuepress目录、隐藏文件和根目录的 README.md
    if (item.startsWith('.') || (baseUrl === '/' && item === 'README.md')) return

    if (stat.isDirectory()) {
      // 处理目录
      const children = generateNavbar(fullPath, `${baseUrl}${item}/`)
      if (children.length > 0) {
        navItems.push({
          text: item,
          children: children
        })
      }
    } else if (item.endsWith('.md')) {
      // 处理 markdown 文件
      const name = item === 'README.md' ? '概述' : item.replace('.md', '')
      const link = item === 'README.md' 
        ? baseUrl
        : `${baseUrl}${item.replace('.md', '.html')}`
      
      navItems.push({
        text: name,
        link: link
      })
    }
  })

  return navItems
} 