FROM node:lts-slim

WORKDIR /home/app

COPY ./package.json ./
RUN apt-get update -qq && \
    apt-get install -y nodejs yarn libnss3 libatk-bridge2.0-0 libcups2 libdrm2 libxkbcommon-dev libxcomposite-dev libxdamage-dev \
                       libxrandr-dev libgbm-dev libasound2 libxshmfence-dev chromium && \
    apt-get clean
RUN yarn install

COPY . .

EXPOSE 4001
