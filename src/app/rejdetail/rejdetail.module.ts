import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RejdetailPageRoutingModule } from './rejdetail-routing.module';

import { RejdetailPage } from './rejdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RejdetailPageRoutingModule
  ],
  declarations: [RejdetailPage]
})
export class RejdetailPageModule {}
