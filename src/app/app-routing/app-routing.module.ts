import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {LoginComponent} from "../auth/login/login.component";
import {RegisterComponent} from "../auth/register/register.component";
import {ContactsComponent} from "../contacts/contacts.component";
import {ArtistsComponent} from "../artists/artists-list/artists.component";
import {ArtistCreateComponent} from "../artists/artist-create/artist-create.component";
import {ItemsComponent} from "../items/items/items.component";
import {ItemDetailsComponent} from "../items/item-details/item-details.component";
import {ItemCreateComponent} from "../items/item-create/item-create.component";
import {AuthGuard} from "../auth/auth.guard";
import {AboutComponent} from "../about/about.component";
import {ForgotPasswordComponent} from "../forgot-password/forgot-password.component";
import {PrivacyComponent} from "../privacy/privacy.component";
import {NotFoundComponent} from "../not-found/not-found.component";
import {ArtistDetailsComponent} from "../artists/artist-details/artist-details.component";
import {ArticlesAllComponent} from "../blog/articles-all/articles-all.component";
import {ArticleDetailsComponent} from "../blog/article-details/article-details.component";

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
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ArtistsComponent,
      },
      {
        path: ':id',
        component: ArtistDetailsComponent,
        loadChildren: () => import('../artists/artists.module').then(m => m.ArtistsModule),
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
    path: 'artist-create',
    component: ArtistCreateComponent,
    loadChildren: () => import('../artists/artists.module').then(m => m.ArtistsModule),
    data: {
      isLogged: true,
      isAdmin: true
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
      isLogged: true,
      isAdmin: true
    }
  },
  {
    path: 'blog',
    children: [
      {
        path: 'articles-all',
        component: ArticlesAllComponent,
        loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule),
        data: {
          isLogged: false
        }
      },
      {
        path: ':id',
        component: ArticleDetailsComponent,
        loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule),
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
    path: 'article-create',
    component: ArtistCreateComponent,
    loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule),
    canActivate: [AuthGuard],
    data: {
      isLogged: true,
      isAdmin: true,
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
