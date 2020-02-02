import { Promise } from "mssql";
import { IDataPlayer } from "../models/dbmodels/interfaces/IDataPlayer";
import { DataPlayer } from "../models/dbmodels/classes/DataPlayer";
import { injectable } from "inversify";

const { poolPromise } = require('./../sqlDb')

@injectable()
export class PlayerStore {
    async post(dataPlayer: IDataPlayer) {
        try {
            return new Promise((resolve: any, reject: any) => {
                poolPromise.query(DataPlayer.Insert(), [dataPlayer.DiscordId, dataPlayer.FirstName, dataPlayer.Nickname, dataPlayer.Level, dataPlayer.Team],
                    (error: any, results: any, fields: any) => {
                        if (error) reject(error);
                        if (results) {
                            resolve(results.insertId)
                        }
                    })
            })
        } catch (error) {
            console.log(error)
        }
    }
}