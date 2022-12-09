import { RichestApiBase } from "./api-base";
import { Auth } from "./types/auth";

export class RichestApiAuth extends RichestApiBase {

    constructor() {

        super();
    }

    async getToken(): Promise<Auth> {

        console.info('Obtaining auth token..');

        return new Promise((resolve, reject) => {
            this.post('oauth/token', {})
            .then(response => {
                return resolve(JSON.parse(response.text));
            })
            .catch(err => {
                return reject(err);
            });  
        })    
    } 
}