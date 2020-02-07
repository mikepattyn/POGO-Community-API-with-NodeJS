import * as express from "express";
import { interfaces, controller, httpPost, request, response, BaseHttpController } from "inversify-express-utils";
import { inject } from "inversify";
import { PlayerStore } from "../../stores/player.store";
import { DataPlayer } from "../../models/dbmodels/classes/DataPlayer";

@controller("/api/v1/players")
export class playerController extends BaseHttpController implements interfaces.Controller {
    constructor(@inject(PlayerStore) private playerStore: PlayerStore) { super() }

    @httpPost('/')
    private async post(@request() req: express.Request, @response() res: express.Response) {
        if (await this.httpContext.user.isAuthenticated()) {
            await this.playerStore.post(req.body)
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