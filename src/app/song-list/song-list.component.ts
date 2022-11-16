import { Component, Input, OnInit } from '@angular/core';
import { AlbumModel } from '../models/album-model';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  @Input() Album!:AlbumModel;

  constructor() { }

  ngOnInit(): void {
  }

}
