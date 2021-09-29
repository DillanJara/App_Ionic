import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigoVerificarPageRoutingModule } from './codigo-verificar-routing.module';

import { CodigoVerificarPage } from './codigo-verificar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CodigoVerificarPageRoutingModule
  ],
  declarations: [CodigoVerificarPage]
})
export class CodigoVerificarPageModule {}
