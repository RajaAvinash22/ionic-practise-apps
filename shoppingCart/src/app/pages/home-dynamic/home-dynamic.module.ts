import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeDynamicPageRoutingModule } from './home-dynamic-routing.module';

import { HomeDynamicPage } from './home-dynamic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeDynamicPageRoutingModule
  ],
  declarations: [HomeDynamicPage]
})
export class HomeDynamicPageModule {}
