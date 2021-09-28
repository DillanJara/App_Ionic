import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigoVerificarPageRoutingModule } from './codigo-verificar-routing.module';

import { CodigoVerificarPage } from './codigo-verificar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigoVerificarPageRoutingModule
  ],
  declarations: [CodigoVerificarPage]
})
export class CodigoVerificarPageModule {}
