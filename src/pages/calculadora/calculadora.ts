import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';



@Component({
  selector: 'page-calculadora',
  templateUrl: 'calculadora.html',
})
export class CalculadoraPage {
   gotas:number = 80;
   precio:number = 0;
   total:number = (this.precio / this.gotas) * 2;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculadoraPage');
  }

  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Mililitros');

    alert.addInput({
      type: 'radio',
      label: '15 ml',
      value: '250'
    });
    alert.addInput({
      type: 'radio',
      label: '5 ml',
      value: '80'
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'OK',
      handler: data => {
        if (typeof(data) == 'undefined') {
            this.noSeleccionoMl();
            return false;
        }else{
          if (parseFloat(data)) {
            this.gotas = parseFloat(data);
            this.total = (this.precio / this.gotas) * 2;
          }
        }
      }
    });
    alert.present();
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Precio',
      message: "Ingresa el precio del aceite esencial a calcular.",
      inputs: [
        {
          name: 'precioprompt',
          placeholder: 'Precio'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
          }
        },
        {
          text: 'Calcular',
          handler: data => {
            if (parseFloat(data.precioprompt) && ( parseFloat(data.precioprompt) > 0 )) {
              this.precio = parseFloat(data.precioprompt);
              this.total = (this.precio / this.gotas) * 2;
            }else{
              this.noEsNumero();
              return false;
            }
          }
        }
      ]
    });
    prompt.present();
  }

  noEsNumero() {
    let alert = this.alertCtrl.create({
      title: 'Precio',
      subTitle: 'Verifica el precio ingresado, siempre deben ser números y más de $0',
      buttons: ['OK']
    });
    alert.present();
  }

  noSeleccionoMl() {
    let alert = this.alertCtrl.create({
      title: 'Cantidad en ML',
      subTitle: 'Debes elegir la presentación de tu aceite esencial',
      buttons: ['OK']
    });
    alert.present();
  }

  reiniciar(){
    this.gotas = 80;
    this.precio = 0;
    this.total = 0;
  }
}
