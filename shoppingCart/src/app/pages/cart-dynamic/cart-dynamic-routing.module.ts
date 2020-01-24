import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartDynamicPage } from './cart-dynamic.page';

const routes: Routes = [
  {
    path: '',
    component: CartDynamicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartDynamicPageRoutingModule {}
