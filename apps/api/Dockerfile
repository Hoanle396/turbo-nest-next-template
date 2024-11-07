FROM node:20-alpine AS base
RUN corepack enable

FROM base AS builder
WORKDIR /app
COPY . .
RUN npm install -g turbo
RUN turbo prune @turbo-nest-next-template/api --docker

FROM base AS installer
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN npm install -g pnpm --force
RUN pnpm install
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

RUN pnpm turbo build --filter=@turbo-nest-next-template/api...

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 turbo-template
RUN adduser --system --uid 1001 api

USER api

COPY --from=installer --chown=api:turbo-template /app/apps/api/package.json /app/apps/api/package.json
COPY --from=installer --chown=api:turbo-template /app/apps/api/dist /app/apps/api/dist
COPY --from=installer --chown=api:turbo-template /app/apps/api/node_modules /app/apps/api/node_modules
COPY --from=installer --chown=api:turbo-template /app/node_modules /app/node_modules

WORKDIR /app/apps/api
EXPOSE 3001
ENV PORT 3001

CMD ["npm","start:prod"]
