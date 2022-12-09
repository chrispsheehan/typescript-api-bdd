import { RichestApiBase } from "./api-base";
import { Transaction } from "./types/transactions";

export class RichestApiTransactions extends RichestApiBase {

    private token: string;

    constructor(token: string) {

        super();

        this.token = token;
    }

    getTransactions(): Promise<Transaction[]> {
        return new Promise((resolve, reject) => {
            this.get('enriched-transactions', this.token)
            .then(response => {
                return resolve(JSON.parse(response.text));
            })
            .catch(err => {
                return reject(err);
            });  
        })    
    } 
}