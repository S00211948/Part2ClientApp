import { AlbumModel } from "./album-model";

export interface ArtistModel {
    name:string,
    nationality:string,
    year_formed:number,
    albums:[AlbumModel]
}
