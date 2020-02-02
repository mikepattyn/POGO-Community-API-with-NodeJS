import { IDataPlayer, Teams } from "../interfaces/IDataPlayer";

export class DataPlayer implements IDataPlayer {
    Id: number;
    DiscordId: string;
    FirstName: string;
    Nickname: string;
    Level: number;
    Team: Teams;

    constructor(dataPlayer: IDataPlayer) {
        this.Id = dataPlayer.Id;
        this.DiscordId = dataPlayer.DiscordId;
        this.FirstName = dataPlayer.FirstName;
        this.Nickname = dataPlayer.Nickname;
        this.Level = dataPlayer.Level;
        this.Team = dataPlayer.Team
    }

    static Insert() {
        return "INSERT INTO Players (DiscordId, FirstName, Nickname, Level, Team) VALUES (?, ?, ?, ?, ?)"
    }
}