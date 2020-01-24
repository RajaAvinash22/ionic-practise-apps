import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartDynamicPageRoutingModule } from './cart-dynamic-routing.module';

import { CartDynamicPage } from './cart-dynamic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartDynamicPageRoutingModule
  ],
  declarations: [CartDynamicPage]
})
export class CartDynamicPageModule {}
