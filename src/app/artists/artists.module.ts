import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsComponent } from './artists.component';
import { ArtistCreateComponent } from './artist-create/artist-create.component';



@NgModule({
  declarations: [ArtistsComponent, ArtistCreateComponent],
  imports: [
    CommonModule
  ]
})
export class ArtistsModule { }
