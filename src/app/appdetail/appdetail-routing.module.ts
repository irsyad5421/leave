import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppdetailPage } from './appdetail.page';

const routes: Routes = [
  {
    path: '',
    component: AppdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppdetailPageRoutingModule {}
