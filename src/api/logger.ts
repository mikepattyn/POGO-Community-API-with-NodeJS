import { injectable } from "inversify";


@injectable()
export class Logger {
    log(data: string) {
        console.log(data)
    }
}