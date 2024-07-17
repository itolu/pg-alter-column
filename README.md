# PG ALTER TABLE COLUMN


## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Running the first migration from the main branch

The .env.example file contains the required environment variables for migration

```bash
# migrate
npm run migrate

# seed
npm run seed

```

## Running the second migration from the alter branch

```bash
# migrate
git checkout alter

# migrate
npm run migrate

```
