
FROM node:10.7

ENV APP_ROOT /src
ENV HOST 0.0.0.0

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm install
RUN npm run build
EXPOSE 3000