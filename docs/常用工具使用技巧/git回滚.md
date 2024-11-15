

## reset 回滚

1. `heard` 所有内容回滚到指定提交点。当前暂存区内容全部清空。 通俗一点就是所有内容回滚到指定节点，其他内容全部清空。

2. `soft` 回滚到指定提交点后，在这个提交节点之后的文件全部变成暂存。当前暂存区内容（正在修改还没提交的内容）全部清空。

3. `mixed` 回滚到指定提交点后，在这个提交节点之后的文件全部变成暂存。当前暂存区内容不变。

> `mixed`与`soft`区别在于是否保留当前正在修改，还未提交的代码。mixed保留，soft放弃保留。



## 常用情景示例

### 情景 - 开发人员新提交的代码导致线上问题

1. 先基于发布的分支创建一个新分支，保留源代码push到服务器。（保留原来数据，方便分析问题）

2. 再切换到自动发布的分支，采用`heard` 方式回滚，回滚后强制提交。



### 情景 - 保密代码多人协同（无法联网，且不在同一局域网，拷贝自己开发的代码）

采用`soft` 或 `mixed`方式回滚，回滚后使用下面脚本，将回滚后的所有文件copy到指定目录。

脚本使用说明：传入两个目录，一个源代码目录，一个输出目标目录

```
#!/bin/bash

# 检查是否提供了必要的参数
if [ $# -ne 2 ]; then
    echo "使用方法: $0 <源目录路径> <目标目录路径>"
    exit 1
fi

# 源目录路径和目标目录路径
source_dir="$1"
destination="$2"

# 检查源目录是否存在
if [ ! -d "$source_dir" ]; then
    echo "错误: 源目录 '$source_dir' 不存在"
    exit 1
fi

# 日志文件路径（在目标目录下）
log_file="$destination/deleteFile.log"

# 创建目标目录（如果不存在）
mkdir -p "$destination"

# 初始化日志文件
> "$log_file"

# 切换到源目录
cd "$source_dir" || exit 1

# 获取暂存区的文件列表
files=$(git diff --cached --name-only)

# 复制每个文件到目标目录，并保留目录结构
for file in $files; do
  # 检查文件是否存在
  if [ -e "$file" ]; then
    # 确保目标目录存在
    target_dir="$destination/$(dirname "$file")"
    mkdir -p "$target_dir"

    # 复制文件
    cp -r "$file" "$target_dir"
  else
    # 如果文件不存在，记录到日志文件
    echo "$file" >> "$log_file"
  fi
done
```

