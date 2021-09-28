import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodigoVerificarPage } from './codigo-verificar.page';

const routes: Routes = [
  {
    path: '',
    component: CodigoVerificarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodigoVerificarPageRoutingModule {}
