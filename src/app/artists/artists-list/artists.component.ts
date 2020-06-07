import { Component, OnInit } from '@angular/core';
import { IArtist } from "../../shared/artist";

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artists: IArtist[] = [];
  artist: IArtist;

  constructor() { }

  ngOnInit(): void {
  }

}
