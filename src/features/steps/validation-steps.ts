import { expect } from 'chai';
import { Given, Then, When } from '@cucumber/cucumber';

Then('valid items are discovered', function(statusCode: number) {
    
    this.tranactionsapi.getTransactions(this.transactionReq, statusCode); 
    
    // excute the request and check the status code is as pwe expected
});

When('the response json is returned', function () {
    
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

