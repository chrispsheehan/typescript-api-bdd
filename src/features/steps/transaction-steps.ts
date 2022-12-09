import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from 'chai';
import { TransactionsReq } from '../../richest-api/types/transactions.req';
import { uuid } from 'uuidv4';
import { randomAmount } from '../support/helper'

const validRequest: TransactionsReq = {
    enrichments: [ "some-enrichment"], //not sure on the expected values here
    transactions: [
        {
            id: uuid(), // presumming this needs to be unique to the call
            date: (new Date).getDate(), // this could be UTC or ticks - would normally check
            amount: randomAmount(1, 300), // generate a random amount - check dps/min maxs + try spicy amounts
            description: "automated test" // probably add some reference helpful for debugging - datestamp?
        }
    ]
}

const invalidRequest: Object = {
    badger: true,
    mushroom: ["button"] // random object designed to fail
}

Given('a user has made a valid transaction request', function() {

    this.transactionReq = validRequest; // set in the interface to be used downstream

    this.tranactionsapi.setToken(this.token); // passing in the valid token makes it 'valid'
});

Then('it should return a response with a {string} status code', function(statusCode: number) {
    
    this.tranactionsapi.getTransactions(this.transactionReq, statusCode); // excute the request
});

Given('a user has attempted to access a resource that they do not have permission to access', function () {

    // simulated by NOT setting the token to a valid one

    this.transactionReq = validRequest // valid req
});

Given('a user has attempted to access a resource that requires authentication', function () {

    // simulated by NOT setting the token to a valid one

    this.transactionReq = validRequest // valid req
});

Given('a user has made an invalid request', function () {

    this.tranactionsapi.setToken(this.token); // passing in the valid token makes it 'valid'

    this.transactionReq = invalidRequest // made up request which should fail
});