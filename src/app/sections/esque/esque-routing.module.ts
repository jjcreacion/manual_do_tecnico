import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsquePage } from './esque.page';

const routes: Routes = [
  {
    path: '',
    component: EsquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsquePageRoutingModule {}
