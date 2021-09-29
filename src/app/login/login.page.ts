import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

import {
  FormGroup, FormControl,
  Validators, FormBuilder
} from '@angular/forms';

    

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  


  constructor(public fb: FormBuilder,
    public alertController: AlertController, 
    public loadingCtrl: LoadingController) { 

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

  async mensajeCarga() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 1000
    });

    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    window.location.href="/principal";
  }

  async ingresar(){
    var f = this.formularioLogin.value;

    if(this.formularioLogin.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }
    else{
      this.mensajeCarga();
    }
  }
}
