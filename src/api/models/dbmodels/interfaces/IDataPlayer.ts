export interface IDataPlayer {
    Id: number;
    DiscordId: string;
    FirstName: string;
    Nickname: string;
    Level: number;
    Team: Teams
}

export enum Teams {
    Instinct,
    Mystic,
    Valor
}