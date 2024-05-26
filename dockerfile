FROM node

WORKDIR /home/node
RUN apt-get -y update && \
  apt-get -y install nginx certbot python3-certbot-nginx
COPY nginx.conf /etc/nginx/sites-available/default
RUN mkdir -p /var/www/certbot
EXPOSE 80/tcp
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
