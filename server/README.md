## Setup

```bash
yarn install

### run docker app ###
docker ps
docker compose up dev-db -d

npx prisma --help
npx prisma migrate dev
npx prisma studio

yarn dev

nest g module prisma
nest g service prisma --no-spec
```
