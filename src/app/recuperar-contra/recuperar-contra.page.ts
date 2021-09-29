import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormGroup, FormControl,
  Validators, FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {

  formRecuperarContra: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController, 
    public loadingCtrl: LoadingController) { 

      this.formRecuperarContra = this.fb.group({
        'correoRecuperacion': new FormControl("",Validators.required)
      })

    }

  ngOnInit() {
  }

  async cargarCodigo() {
    const loading = await this.loadingCtrl.create({
      message: 'Se esta Enviando un codigo a su Correo...',
      duration: 1000
    });

    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    window.location.href="/codigo-verificar";
  }

  async ingresarCorreo(){
    var f = this.formRecuperarContra.value;
    let patron = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if(!patron.test(f.correoRecuperacion)) {
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Tienes que ingresar un correo valido',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }
    else {
      this.cargarCodigo();
    }
  }
}


