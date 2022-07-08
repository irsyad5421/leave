import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rejdetail1Page } from './rejdetail1.page';

const routes: Routes = [
  {
    path: '',
    component: Rejdetail1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rejdetail1PageRoutingModule {}
