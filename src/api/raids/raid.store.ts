import { injectable } from "inversify";

@injectable()
export class RaidStore {
    sayHello(){
        return "Hello World!";
    }
}