import { Component, Input, OnInit } from '@angular/core';
import { AlbumModel } from '../../models/album-model';
import { ArtistModel } from '../../models/artist-model';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  @Input() Artist!:ArtistModel;
  clickedAlbum!:AlbumModel;

  constructor() { }

  ngOnInit(): void {
  }

  clicked(album:AlbumModel)
  {
    this.clickedAlbum = album;
  }

}
