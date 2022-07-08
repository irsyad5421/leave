import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReqdetailPage } from './reqdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ReqdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReqdetailPageRoutingModule {}
