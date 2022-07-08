import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reqdetail1Page } from './reqdetail1.page';

const routes: Routes = [
  {
    path: '',
    component: Reqdetail1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Reqdetail1PageRoutingModule {}
