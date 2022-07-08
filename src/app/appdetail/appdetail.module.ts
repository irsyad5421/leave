import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppdetailPageRoutingModule } from './appdetail-routing.module';

import { AppdetailPage } from './appdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppdetailPageRoutingModule
  ],
  declarations: [AppdetailPage]
})
export class AppdetailPageModule {}
