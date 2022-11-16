import { Component, Input, OnInit } from '@angular/core';
import { AlbumModel } from 'src/app/models/album-model';

@Component({
  selector: 'app-album-row',
  templateUrl: './album-row.component.html',
  styleUrls: ['./album-row.component.css']
})
export class AlbumRowComponent implements OnInit {

  @Input()Album!:AlbumModel;
  constructor() { }

  ngOnInit(): void {
  }

}
