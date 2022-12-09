import env from "../config/env.json"

export class RichestApiConfig {
    
    baseUrl: string;
    clientId: string;
    clientSecret: string;

    constructor() {

        this.baseUrl = `${env.BASE_URL}/${env.API_VERSION}/`;
        this.clientId = env.CLIENT_ID;
        this.clientSecret = env.CLIENT_SECRET;
    }
}