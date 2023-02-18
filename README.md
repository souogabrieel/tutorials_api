# Tutorials API

An API to share tutorials.

## Tools

[![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)

## Run locally

The first thing to do is to clone the repository:

```sh
git clone https://github.com/souogabrieel/tutorials_api
cd tutorials_api
```

Then install the dependencies:

```sh
npm install
```

Once npm has finished downloading the dependencies:

```sh
npx prisma migrate dev --name init
npm run dev
```

API request examples in `api/tutorial.http` file.