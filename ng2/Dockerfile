FROM node:6-slim
# replace this with your application's default port
EXPOSE 3000
WORKDIR /usr/src
RUN mkdir /usr/src/ng2
COPY . /usr/src/ng2
WORKDIR /usr/src/ng2
RUN npm install -g typescript
RUN npm install
#CMD [node, start]
CMD npm start
