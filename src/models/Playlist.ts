export interface Playlist {
    id: number;
    name: string;
    favorite: boolean;
    color: string;
    tracks?: Track[];
}

export interface Track {
    id: number;
    name: string;
}

// export class Playlist {
//     id:number = 0;
// }
// instanceof Playlist
