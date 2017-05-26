FROM nodesource/node:4.0


ADD package.json package.json
RUN npm install

ADD ..

CMD ["node", "HelloWorldServer"]

ENV NODE_ENV dev