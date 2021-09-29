import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {

  constructor(public loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async cargarCodigo() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 1000
    });

    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    window.location.href="/codigo-verificar";
  }
}


