import { inject, injectable } from "inversify";
import { DatastoreGoogleCloud } from "./datastore.google-cloud";

@injectable()
export class BaseStore {
    @inject(DatastoreGoogleCloud)
    datastoreGoogleCloud!: DatastoreGoogleCloud
}