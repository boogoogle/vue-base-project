From registry.yonghui.cn/public/nginx:latest

MAINTAINER Kellerman <80816284@yonghui.com>

ADD ./dist /var/www/ycloud-site/dist
COPY ./nginx/gzip.conf /etc/nginx/gzip.conf
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf