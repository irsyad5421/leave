import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RejdetailPage } from './rejdetail.page';

const routes: Routes = [
  {
    path: '',
    component: RejdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RejdetailPageRoutingModule {}
