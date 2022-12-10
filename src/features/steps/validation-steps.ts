import { expect } from 'chai';
import { Given, Then } from '@cucumber/cucumber';

Then('valid items are discovered', function(statusCode: number) {
    
    this.tranactionsapi.getTransactions(this.transactionReq, statusCode); 
    
    // excute the request and check the status code is as pwe expected
});

Given('the response json is returned', function () {

    // simulated by NOT setting the token to a valid one

    this.transactionReq = validRequest // valid req
});

