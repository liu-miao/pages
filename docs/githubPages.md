创建仓库

用户名.github.io

## token创建

settings 

进入 左侧最下面  deploy 

选择权限 点击生成

## 填写token

在仓库的配置中的Secrets and variables 中填上刚才的token



## 修改deploy-docs.yml



最下面填写密钥

```
        env:
          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## 部署分支确认

默认是press 是发布到gh_pages

```
        with:
          # 部署到 gh-pages 分支
          target_branch: gh-pages
          # 部署目录为 VuePress 的默认输出目录
          build_dir: docs/.vuepress/dist
```



## 域名确认

```

```



