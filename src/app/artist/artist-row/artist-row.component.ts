import { Component, Input, OnInit } from '@angular/core';
import { ArtistModel } from 'src/app/models/artist-model';

@Component({
  selector: 'app-artist-row',
  templateUrl: './artist-row.component.html',
  styleUrls: ['./artist-row.component.css']
})
export class ArtistRowComponent implements OnInit {

  @Input() Artist!:ArtistModel;
  constructor() { }

  ngOnInit(): void {
  }

}
