###
 # @Description: In User Settings Edit
 # @Author: hdx
 # @Date: 2019-11-25 10:42:51
 # @LastEditors: hdx
 # @LastEditTime: 2020-03-22 11:14:02
 ###
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m '企业购接口文档'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:javadog-net/b2b.git master:gh-pages
git remote add gitee git@gitee.com:javadog-net/b2b.git
git push gitee master


cd -