import request from "supertest";
import { RichestApiBase } from "./api-base";
import { TransactionsReq } from "./types/transactions.req";

export class RichestApiTransactions extends RichestApiBase { // import shared code from base

    private token: string;

    constructor(token?: string) {

        super(); // required to load extended class(es)

        this.token = token ?? "INVALID_TOKEN"; // set an 'invalid' token as a default
    }

    setToken(token: string) {
        this.token = token; // set the token - override the default wonky one
    }

    getTransactions(content: TransactionsReq): request.Test {
        return this.postWithAuth('enriched-transactions', this.token, content);
    } 
}