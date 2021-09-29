import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormGroup, FormControl,
  Validators, FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-codigo-verificar',
  templateUrl: './codigo-verificar.page.html',
  styleUrls: ['./codigo-verificar.page.scss'],
})
export class CodigoVerificarPage implements OnInit {

  formCodigo: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController, 
    public loadingCtrl: LoadingController) { 

      this.formCodigo = this.fb.group({
        'codigo': new FormControl("",Validators.required)
      })

    }

  ngOnInit() {
  }

  async ingresarCodigo(){
    var f = this.formCodigo.value;
    let caracteres = f.codigo.length; 

    if(caracteres != 6) {
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Tienes que ingresar un codigo de 6 caracteres',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }
    else {
      window.location.href="/home";
    }
  }
}
