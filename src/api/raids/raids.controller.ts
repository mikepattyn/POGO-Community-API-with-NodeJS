import { controller, httpPost } from "inversify-express-utils"
import { RaidStore } from "./raid.store";
import { inject } from "inversify";
@controller("/raids")
export class RaidsController {
    @inject(RaidStore)
    private raidStore!: RaidStore

    @httpPost('/')
    public sayHello() {
        return this.raidStore.post()
    }
}
