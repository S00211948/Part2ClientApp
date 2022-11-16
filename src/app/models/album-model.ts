import { SongModel } from "./song-model";

export interface AlbumModel {
    title: String,
    artist:String,
    release_year: Number,
    songs:[SongModel]
}
