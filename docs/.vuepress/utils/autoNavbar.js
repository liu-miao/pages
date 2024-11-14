import fs from 'fs'
import path from 'path'

// 获取指定目录下的所有 markdown 文件
export function getDirctoryFiles(dirPath) {
  const files = []
  
  // 读取目录内容
  const items = fs.readdirSync(dirPath)
  
  items.forEach(item => {
    const fullPath = path.join(dirPath, item)
    const stat = fs.statSync(fullPath)
    
    if (stat.isDirectory()) {
      // 如果是目录，递归读取
      const subFiles = getDirctoryFiles(fullPath)
      files.push(...subFiles)
    } else if (item.endsWith('.md')) {
      // 如果是 markdown 文件
      const relativePath = path.relative(process.cwd(), fullPath)
      files.push({
        path: relativePath,
        name: item.replace('.md', '')
      })
    }
  })
  
  return files
} 