import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsListRoutingModule } from './items-list-routing.module';
import { ItemsListComponent } from './items-list.component';
import { HeaderComponent } from './header/header.component';
import { PrimeNgModule } from '../../modules/prime-ng/prime-ng/prime-ng.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { PostCouponComponent } from './post-coupon/post-coupon.component';
import { CouponComponent } from './coupon/coupon.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SharedModule } from '../../modules/shared/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ItemsListComponent,
    HeaderComponent,
    DashboardComponent,
    CategoryComponent,
    ProductComponent,
    CartComponent,
    OrdersComponent,
    PostCouponComponent,
    CouponComponent,
    WishlistComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    ItemsListRoutingModule,
    PrimeNgModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ItemsListModule { }
