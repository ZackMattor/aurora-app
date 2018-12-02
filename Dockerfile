from nginx:alpine

copy dist /www/

expose 80
expose 443
