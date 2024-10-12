# Why?

The purpose of this project is to familiarize myself with GraphQL, Apollo Server/Client and Prisma

I wanted to be able to actually use this for something and my wife suggested pulling ingredients/directions from recipes and being able to tag/search them later

# Running

There is a docker-compose included, run `docker-compose up -d` to bring up the postgres db

`npm run watch` to have parcel re-build when source files change

`npm run dev` to run the Apollo Server with hot-reloading

There is a separate frontend project [here](https://github.com/chrisf/recipes-frontend)

# Database Migrations

### IMPORTANT: you will need to run this at least once

To create the database and run the migrations, you will need to run:

```
npx prisma db push
```

# Seed Data

You can run `npm run seed` to load some data if you don't feel like filling out some forms
