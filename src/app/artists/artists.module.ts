import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsComponent } from './artists-list/artists.component';
import { ArtistCreateComponent } from './artist-create/artist-create.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [ArtistsComponent, ArtistCreateComponent, ArtistDetailsComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class ArtistsModule { }
