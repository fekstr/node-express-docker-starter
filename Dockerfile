# Compile step
FROM node:12-slim
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN yarn install
RUN yarn run build

# Run
FROM node:12-slim
WORKDIR /usr/src/app
ENV PORT=8080
COPY package*.json ./
RUN yarn install --only=production
COPY --from=0 /usr/src/app/dist ./dist
CMD yarn start