# TypeScriptAPITestFramework

- [Blog post inspiration](https://sylvain.pontoreau.com/2018/04/30/typescript-cucumber-getting-started)
- [CucumberJS](https://github.com/cucumber/cucumber-js)

This framework targets the [Coin Ranking API](https://rapidapi.com/Coinranking/api/coinranking1).

## Configuration

- Populate the config file found at `src/config/env.json`

## Setup

- Install [node](https://nodejs.org/en/download/)
- Install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

## Run it locally

```bash
yarn build
yarn test
```

## Filters

Filters can be appended to tests commands.

Documentation found [here](https://cucumber.io/docs/cucumber/api/#tag-expressions)

Examples filters;

```bash
"(@coins and not @exchanges)"
"(@coins or @exchanges)"
"@coins"
```
