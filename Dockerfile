FROM node:18

RUN mkdir -p /home/app

COPY . /home/app

EXPOSE 3000

CMD ["mongo", "/home/app/index.js"]