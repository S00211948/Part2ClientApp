import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtistListComponent } from './artist/artist-list/artist-list.component';
import{HttpClientModule} from '@angular/common/http';
import { AlbumListComponent } from './album/album-list/album-list.component';
import { SongListComponent } from './song-list/song-list.component';
import { AlbumRowComponent } from './album/album-row/album-row.component';
import { ArtistRowComponent } from './artist/artist-row/artist-row.component'

@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    AlbumListComponent,
    SongListComponent,
    AlbumRowComponent,
    ArtistRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
