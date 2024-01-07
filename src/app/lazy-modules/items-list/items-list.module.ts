import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsListRoutingModule } from './items-list-routing.module';
import { ItemsListComponent } from './items-list.component';


@NgModule({
  declarations: [
    ItemsListComponent
  ],
  imports: [
    CommonModule,
    ItemsListRoutingModule
  ]
})
export class ItemsListModule { }
