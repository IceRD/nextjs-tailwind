FROM node:15-alpine
WORKDIR /app

ADD package.json package.json
RUN npm install
ADD . .

ENV NODE_ENV production
RUN npm run build
RUN npm prune --production

CMD ["npm", "preview"]
EXPOSE 3000