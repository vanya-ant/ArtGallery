import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemCreateComponent } from './item-create/item-create.component';


@NgModule({
  declarations: [ItemsComponent, ItemDetailsComponent, ItemCreateComponent],
  imports: [
    CommonModule
  ]
})
export class ItemsModule { }
