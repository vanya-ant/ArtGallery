import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesAllComponent } from './articles-all/articles-all.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleCreateComponent } from './article-create/article-create.component';



@NgModule({
  declarations: [ArticlesAllComponent, ArticleDetailsComponent, ArticleCreateComponent],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
