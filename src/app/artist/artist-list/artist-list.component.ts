import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/artist.service';
import { ArtistModel } from '../../models/artist-model';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  artistList:ArtistModel[] = [];
  message:string = "";

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.artistService.getArtists().subscribe({
      next: (value: ArtistModel[] )=> this.artistList = value,
      complete: () => console.log("book service finished"),
      error: (mess) => this.message = mess
    })
    console.log("Artists loaded")
  }
}
