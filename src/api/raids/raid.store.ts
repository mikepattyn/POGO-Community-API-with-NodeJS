import { injectable } from "inversify";
import { BaseStore } from "../base.store";
const uuidv4 = require('uuid/v4');

@injectable()
export class RaidStore extends BaseStore {

    constructor() {
        super();
    }

    async post() {
        // The kind for the new entity
        const kind = 'Raid'

        // The name/ID for the new entity
        const name = uuidv4();

        // The Cloud Datastore key for the new entity
        const taskKey = this.datastoreGoogleCloud.instance.key([kind, name]);

        // Prepares the new entity
        const task = {
            key: taskKey,
            data: {
                gymName: 'WW2 Bunker',
                timeRemaining: "00:00:00",
                pokemonName: "Machamp",
                tiers: 3
            }
        };

        await this.datastoreGoogleCloud.instance.save(task);
    }
}