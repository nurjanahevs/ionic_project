import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductdetailPage } from './productdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ProductdetailPage,
  },
  {
    path: 'pesan',
    loadChildren: () =>
      import('../pesan/pesan.module').then((m) => m.PesanPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductdetailPageRoutingModule {}
