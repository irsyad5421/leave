import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rejdetail1PageRoutingModule } from './rejdetail1-routing.module';

import { Rejdetail1Page } from './rejdetail1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rejdetail1PageRoutingModule
  ],
  declarations: [Rejdetail1Page]
})
export class Rejdetail1PageModule {}
