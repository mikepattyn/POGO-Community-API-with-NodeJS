import { injectable } from "inversify";

const { Datastore } = require('@google-cloud/datastore');

@injectable()
export class DatastoreGoogleCloud {
    instance: any
    constructor() {
        this.instance = new Datastore()
    }
}