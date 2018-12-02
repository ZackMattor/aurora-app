from nginx:alpine

copy dist /usr/share/nginx/html

expose 80
expose 443
