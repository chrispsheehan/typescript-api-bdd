# TypeScriptAPITestFramework

- [Blog post inspiration](https://sylvain.pontoreau.com/2018/04/30/typescript-cucumber-getting-started)
- [CucumberJS](https://github.com/cucumber/cucumber-js)

## Configuration

- Populate the config file found at `src/config/env.json`

## Setup

- Install [node](https://nodejs.org/en/download/)
- Install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

## Mock API

*start this before running the tests*

We can use this while developing tests while the API isn't available. Can also be used for isololating dependant services.

- Move to directory `cd mock`
- Install depenancies `yarn`
- Start live reload session (recommended): `yarn start`
- ...OR Start static instance: `yarn static`

## Run Tests

```bash
yarn build
yarn test
```

## Filters (version 2.0)

Filters can be appended to tests commands.

Documentation found [here](https://cucumber.io/docs/cucumber/api/#tag-expressions)
