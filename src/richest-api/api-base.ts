import request from "supertest";
import { RichestApiConfig } from "./api-config";

export class RichestApiBase extends RichestApiConfig {

    constructor() {

        super();
    }

    get(targetResouce: string, authToken: string, ): request.Test {
        return request(this.baseUrl)
            .get(`/${targetResouce}/`)
            .set('Authorization', 'bearer ' + authToken)
    }

    post(targetResouce: string, content: object): request.Test {
        return request(this.baseUrl)
            .post(`/${targetResouce}/`)
            .send(content)
    }
}