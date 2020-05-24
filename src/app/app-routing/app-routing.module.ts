import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {LoginComponent} from "../auth/login/login.component";
import {RegisterComponent} from "../auth/register/register.component";
import {ContactsComponent} from "../contacts/contacts.component";
import {ArtistsComponent} from "../artists/artists.component";
import {ArtistCreateComponent} from "../artists/artist-create/artist-create.component";
import {ItemsComponent} from "../items/items/items.component";
import {ItemDetailsComponent} from "../items/item-details/item-details.component";
import {ItemCreateComponent} from "../items/item-create/item-create.component";
import {AuthGuard} from "../auth/auth.guard";
import {AboutComponent} from "../about/about.component";
import {ForgotPasswordComponent} from "../forgot-password/forgot-password.component";
import {PrivacyComponent} from "../privacy/privacy.component";
import {NotFoundComponent} from "../not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule),
    data: {
      isLogged: false
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    loadChildren: () => import('../contacts/contacts.module').then(m => m.ContactsModule),
    data: {
      isLogged: false
    },
  },
  {
    path: 'artists',
    component: ArtistsComponent,
    loadChildren: () => import('../artists/artists.module').then(m => m.ArtistsModule),
    data: {
      isLogged: false
    }
  },
  {
    path: 'artist-create',
    component: ArtistCreateComponent,
    loadChildren: () => import('../artists/artists.module').then(m => m.ArtistsModule),
    data: {
      isLogged: false
    }
  },
  {
    path: 'items',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ItemsComponent,
      },
      {
        path: ':id',
        component: ItemDetailsComponent,
        loadChildren: () => import('../items/items.module').then(m => m.ItemsModule),
        data: {
          isLogged: false
        }
      }
    ],
    data: {
      isLogged: false
    }
  },
  {
    path: 'item-create',
    component: ItemCreateComponent,
    loadChildren: () => import('../items/items.module').then(m => m.ItemsModule),
    canActivate: [AuthGuard],
    data: {
      isLogged: true
    }
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
