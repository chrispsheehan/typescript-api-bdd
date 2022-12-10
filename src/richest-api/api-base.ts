import request from "supertest";
import { RichestApiConfig } from "./api-config";

export class RichestApiBase extends RichestApiConfig {

    constructor() {

        super();
    }

    post(targetResouce: string, content: object): request.Test {
        return request(this.baseUrl)
            .post(`/${targetResouce}/`)
            .send(content)
    }

    postWithAuth(targetResouce: string, authToken: string, content: object): request.Test {
        return this.post(targetResouce, content)
            .set('Authorization', 'bearer ' + authToken)
    }
}