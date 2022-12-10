import { Given, Then, When } from '@cucumber/cucumber';
import { TransactionsReq } from '../../richest-api/types/transactions.req';
import { uuid } from 'uuidv4';
import { randomAmount } from '../support/helper'
import { expect } from 'chai';
import request from "supertest";
import { Transaction } from '../../richest-api/types/transactions';

const validRequest: TransactionsReq = {
    enrichments: [ "some-enrichment"], //not sure on the expected values here
    transactions: [
        {
            id: uuid(), // presumming this needs to be unique to the call
            date: (new Date).getDate(), // this could be UTC or ticks - would normally check
            amount: randomAmount(1, 300), // generate a random amount - check dps/min maxs + try spicy amounts
            description: "automated test" // probably add some reference helpful for debugging - datestamp?
        }/// There is a lot more to go into here, for example sending some naughty strings etc etc https://github.com/minimaxir/big-list-of-naughty-strings
    ]
}

Given('a user has made a valid transaction request', function() {

    this.tranactionsapi.setToken(this.token); // passing in the valid token makes it 'valid'
    this.transactionReq = this.tranactionsapi.getTransactions(validRequest); // set in the interface to be used downstream
});

Then('it should return a response with a {int} status code', async function(statusCode: number) {
    
    this.transactionResp = await this.transactionReq
    .then(function(res: any){
        expect(res.status).to.equal(statusCode) // assertion
        return res;
    });
});

Given('a user has attempted to access a resource that requires authentication', function () {

    // simulated by NOT setting the token to a valid one
    this.transactionReq = this.tranactionsapi.getTransactions(validRequest); // valid req
});

Given('a user has made an invalid request', function () {

    this.tranactionsapi.setToken(this.token); // passing in the valid token makes it 'valid'
    this.transactionReq = this.tranactionsapi.getTransactions({
        badger: true,
        mushroom: ["button"] // random object designed to fail
    }); // made up request which should fail
});

Then('valid items are discovered', function() { 

    let transactions: Transaction[] = JSON.parse(JSON.parse(JSON.stringify(this.transactionResp)).text); // a bit shonky - could be down to the mock code?

    let transaction: Transaction = transactions[0];

    expect(transaction.amount).to.be.a('number');
    expect(transaction.category).to.be.a('string');
    expect(transaction.date).to.be.a('number');
    expect(transaction.description).to.be.a('string');
    expect(transaction.id).to.be.a('string');
    expect(transaction.merchant).to.be.an('string');
    expect(transaction.regularity).to.be.an('string');
});