import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoriPage } from './inventori.page';

const routes: Routes = [
  {
    path: '',
    component: InventoriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoriPageRoutingModule {}
