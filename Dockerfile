
FROM mhart/alpine-node:14

ENV APP_ROOT /src
# ENV HOST 0.0.0.0

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN yarn
RUN yarn build
EXPOSE 3000