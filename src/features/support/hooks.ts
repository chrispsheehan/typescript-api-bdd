import { Before } from '@cucumber/cucumber';
import { RichestApiAuth } from '../../richest-api/api-auth';
import { RichestApiTransactions } from '../../richest-api/api-transactions';

Before(async function () {

    this.token = (await (new RichestApiAuth()).getToken()).access_token;

    this.tranactionsapi = new RichestApiTransactions();

    this.transactionReq = new Object();
});