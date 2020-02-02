import * as express from "express"
import { controller, httpGet, interfaces, requestParam, response, httpPost, request, BaseHttpController } from "inversify-express-utils"
import { inject } from "inversify";
import { LocationStore } from "../../stores/location.store";


@controller('/api/v1/locations')
export class locationController extends BaseHttpController implements interfaces.Controller {

    constructor(@inject(LocationStore) private locationStore: LocationStore) { super() }

    @httpGet('/:id')
    private async getById(@requestParam("id") id: number, @response() res: express.Response) {
        if (await this.httpContext.user.isAuthenticated()) {
            await this.locationStore.getById(id)
                .then((result) => {
                    res.status(200).json(result)
                })
                .catch((error: any) => {
                    res.status(400).json(error)
                })
        } else {
            res.status(401).end()
        }
    }

    @httpPost('/')
    private async post(@request() req: express.Request, @response() res: express.Response) {
        if (await this.httpContext.user.isAuthenticated()) {
            await this.locationStore.post(req.body)
                .then(() => {
                    res.sendStatus(201)
                })
                .catch((error: any) => {
                    res.status(400).json(error)
                })
        } else {
            res.status(401).end()
        }
    }
}