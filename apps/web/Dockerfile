FROM node:20-alpine AS base
RUN corepack enable

FROM base AS builder
WORKDIR /app
COPY . .
RUN npm install -g turbo
RUN turbo prune @turbo-nest-next-template/web --docker

FROM base AS installer
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN npm install -g pnpm --force
RUN pnpm install
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

RUN pnpm turbo build --filter=@turbo-nest-next-template/web...

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 turbo-template
RUN adduser --system --uid 1001 web

USER web

COPY --from=installer --chown=web:turbo-template /app/apps/web/package.json /app/apps/web/package.json
COPY --from=installer --chown=web:turbo-template /app/apps/web/next.config.ts /app/apps/web/next.config.ts
COPY --from=installer --chown=web:turbo-template /app/apps/web/.next /app/apps/web/.next
COPY --from=installer --chown=web:turbo-template /app/apps/web/node_modules /app/apps/web/node_modules
COPY --from=installer --chown=web:turbo-template /app/apps/web/public /app/apps/web/public
COPY --from=installer --chown=web:turbo-template /app/node_modules /app/node_modules

WORKDIR /app/apps/web
EXPOSE 3000

CMD ["npm", "start"]
