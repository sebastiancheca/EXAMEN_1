import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlertText() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Prompt!',
      buttons: ['Cancel','OK'],
      inputs: [
        {
          placeholder: 'Nombres'
        },
        {
          placeholder: 'Apellidos'
        },
        {
          type: 'textarea',
          placeholder: 'Descripción materia'
        },
        {
          type: 'url',
          value: 'https://ionicframework.com'
          
        },
        {
          type: 'date',
        },
        {
          type: 'password',
          placeholder: 'Clave'
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8
          }
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100
        }
        
      ]
    });

    await alert.present();
  }
}

