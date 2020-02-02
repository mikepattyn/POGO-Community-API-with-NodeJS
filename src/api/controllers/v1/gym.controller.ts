import * as express from "express"
import { controller, httpGet, interfaces, requestParam, response, httpPost, request, requestHeaders, BaseHttpController } from "inversify-express-utils"
import { inject } from "inversify";
import { GymStore } from "../../stores/gym.store";

@controller('/api/v1/gyms')
export class gymController extends BaseHttpController implements interfaces.Controller {
    constructor(@inject(GymStore) private gymStore: GymStore) { super() }

    @httpGet('/:id')
    private async getById(@requestParam("id") id: number, @requestHeaders() headers: any, @response() res: express.Response) {
        if (await this.httpContext.user.isAuthenticated()) {
            await this.gymStore.getById(id).then(result => {
                res.status(200).json(result)
            }).catch((error: any) => {
                res.status(500).json(error)
            })
        } else {
            res.status(401).end()
        }
    }

    @httpPost('/')
    private async post(@request() req: express.Request, @response() res: express.Response) {
        if (await this.httpContext.user.isAuthenticated()) {
            await this.gymStore.post(req.body)
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