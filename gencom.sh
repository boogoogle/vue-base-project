#!/bin/bash 
# This is a very simple example
# 若提示权限问题,请执行 chmod +x  *.sh

echo Enter component name
read NAME


# 创建文件夹
rm -rf ./.tmp && mkdir .tmp
cp -r "./component-template" .tmp/$NAME
cd .tmp/$NAME
# 修改文件内容
# mac 不允许sed -i直接修改文件内容,会强制备份,所以多加了一个空字符, linux下不需要

for filename in `ls -B`
do  
    echo ${filename}
    sed -i '' "s/component/$NAME/g" $filename
done

# 修改文件名
mv component.scss $NAME.scss
mv component.vue $NAME.vue


echo "the component is --> $NAME -- $PWD"

exit 0