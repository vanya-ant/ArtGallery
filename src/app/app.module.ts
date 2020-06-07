import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from "./core/core.module";
import { AuthModule } from "./auth/auth.module";
import { ArtistsModule} from "./artists/artists.module";
import { ItemsModule } from "./items/items.module";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";
import {ToastrModule} from "ngx-toastr";
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { CarouselModule } from "ngx-owl-carousel-o";
import { BlogModule } from "./blog/blog.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    ForgotPasswordComponent,
    PrivacyComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    CoreModule,
    AuthModule,
    ArtistsModule,
    ItemsModule,
    BlogModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forRoot({}, {}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
