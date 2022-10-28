FROM nginx

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

ENTRYPOINT [ "/docker-entrypoint.sh" ]

CMD [ "nginx", "-g", "daemon off;" ]