import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeDynamicPage } from './home-dynamic.page';

const routes: Routes = [
  {
    path: '',
    component: HomeDynamicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeDynamicPageRoutingModule {}
