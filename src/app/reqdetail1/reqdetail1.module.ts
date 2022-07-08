import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reqdetail1PageRoutingModule } from './reqdetail1-routing.module';

import { Reqdetail1Page } from './reqdetail1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Reqdetail1PageRoutingModule
  ],
  declarations: [Reqdetail1Page]
})
export class Reqdetail1PageModule {}
