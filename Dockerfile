FROM denoland/deno:1.38.5

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

COPY . .
RUN deno cache main.ts
RUN deno run -A dev.ts build


EXPOSE 8000

CMD ["run", "-A", "main.ts"]