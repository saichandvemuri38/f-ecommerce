import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsListRoutingModule } from './items-list-routing.module';
import { ItemsListComponent } from './items-list.component';
import { HeaderComponent } from './header/header.component';
import { PrimeNgModule } from '../../modules/prime-ng/prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    ItemsListComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ItemsListRoutingModule,
    PrimeNgModule
  ]
})
export class ItemsListModule { }
