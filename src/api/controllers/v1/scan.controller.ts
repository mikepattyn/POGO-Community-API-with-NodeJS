import * as express from "express";
import { controller, BaseHttpController, interfaces, httpPost, requestParam, response, request } from "inversify-express-utils";
import { inject } from "inversify";
import { GoogleCloudClient } from "../../services/google-cloud-vision.client";


@controller('/api/v1/scans')
export class scanController extends BaseHttpController implements interfaces.Controller {
    constructor(@inject(GoogleCloudClient) private googleCloudClient: GoogleCloudClient) { super() }

    @httpPost("/")
    private async scanImage(@request() req: express.Request, @response() res: express.Response) {

    }
}