import { injectable } from "inversify";
import jwt from "jsonwebtoken"
import { isNullOrUndefined } from "util";

export class AuthService {
    static VerifyToken(token: string) {
        var retVal: string | null | object = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_KEY!)
        if (isNullOrUndefined(retVal)) {
            retVal = null;
        }
        return retVal
    }
}