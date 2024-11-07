# Nest JS API server template

## Description

- [Nest](https://docs.nestjs.com) is a framework for building efficient, scalable Node.js server-side applications.

## Documentation of some libraries I used

- [TypeORM](https://typeorm.io/) is an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript (ES2021).
- [Web3.js](https://web3js.org/) is a TypeScript implementation of the Ethereum JSON RPC API and related tooling maintained by ChainSafe Systems.

# Installation

```bash
# install
$ pnpm install
```

# Note before running the project

- Create '.env' file in the project's root folder. (For example: /root/.env).
- Create a folder named 'logs' in the root folder of the project. In the 'logs' folder create a file named 'error.txt'. (For example: /root/logs/error.txt).

# Watch mode

```bash
# watch mode
$ pnpm dev

# worker watch mode
$ pnpm dev:worker

# run seed
$ pnpm seed
```

# Test

```bash
# unit tests
$ pnpm test

# e2e tests
$ pnpm test:e2e

# test coverage
$ pnpm test:cov
```

# Build & Production mode

```bash
# build
$ pnpm build

# start app
$ pnpm start:prod

# start worker app
$ pnpm start:prod-worker

# run seed if you want to seed some data
$ pnpm seed
```

# Using docker

```bash
# build
$ docker-compose up -d

# start
$ docker-compose start

# restart
$ docker-compose restart
```

# Stay in touch

- Author - [Lê Hữu Hoàn](https://www.github.com/hoanle396)

# License

Nest is [MIT licensed](LICENSE).