import { Before } from '@cucumber/cucumber';
import { RichestApiAuth } from '../../richest-api/api-auth';
import { RichestApiTransactions } from '../../richest-api/api-transactions';

Before(async function () {

    // before each test we new up the desired objects used in test

    // there is an in-built 'world' class which can be customised and extended

    this.token = (await (new RichestApiAuth()).getToken()).access_token;

    this.tranactionsapi = new RichestApiTransactions();

    this.transactionReq = new Object();
});