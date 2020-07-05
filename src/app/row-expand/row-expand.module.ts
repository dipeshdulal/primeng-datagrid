import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RowExpandRoutingModule } from './row-expand-routing.module';
import { RowExpandComponent } from './row-expand.component';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [RowExpandComponent],
  imports: [
    CommonModule,
    RowExpandRoutingModule,
    TableModule,
  ],
  providers: [
  ]
})
export class RowExpandModule { }
