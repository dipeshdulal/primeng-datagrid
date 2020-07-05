import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RowExpandComponent } from './row-expand.component';

const routes: Routes = [
  {
    path: "", component: RowExpandComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RowExpandRoutingModule { }
