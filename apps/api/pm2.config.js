module.exports = {
  apps: [
    {
      name: 'turbo-nest-template-api',
      script: 'pnpm start:prod',
    },
    {
      name: 'turbo-nest-template-worker',
      script: 'pnpm start:prod-worker',
    },
  ],
};
