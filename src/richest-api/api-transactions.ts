import { RichestApiBase } from "./api-base";
import { Transaction } from "./types/transactions";
import { TransactionsReq } from "./types/transactions.req";

export class RichestApiTransactions extends RichestApiBase { // import shared code from base

    private token: string;

    constructor(token?: string) {

        super();

        this.token = token ?? "INVALID_TOKEN"; // set an 'invalid' token as a default
    }

    setToken(token: string) {
        this.token = token; // set the token - override the default wonky one
    }

    getTransactions(content: TransactionsReq, expectedCode: string) {
        this.postWithAuth('enriched-transactions', this.token, content)
        .expect(expectedCode) // this will check the code is as per expected
        .end(function(err, res) {
          if (err) throw err;
        });  
    } 
}