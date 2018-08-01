import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Aceite } from "../../interfaces/aceite.interface";
import { Personificadores } from "../../data/data.personificador";
import { Modificadores } from "../../data/data.modificador";
import { Mejoradores } from "../../data/data.mejorador";
import { Ecualizadores } from "../../data/data.ecualizador";

@Component({
  selector: 'page-clasificacion',
  templateUrl: 'clasificacion.html',
})
export class ClasificacionPage {
  personificadores:Aceite[] = [];
  modificadores:Aceite[] = [];
  ecualizadores:Aceite[] = [];
  mejoradores:Aceite[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.personificadores = Personificadores;
    this.modificadores = Modificadores;
    this.ecualizadores = Ecualizadores;
    this.mejoradores = Mejoradores;
  }
  Personificador() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Elige los aceites personificadores');

    for (let key in this.personificadores) {
      alert.addInput({
        type: 'checkbox',
        label: ' '+this.personificadores[key].aceite,
        value: 'value1',
      });
    }

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        console.log('Checkbox data:', data);
        if (data.length > 4) {
            console.log ('entramos')
            let alert = this.alertCtrl.create({
              title: 'Cantidad de Aceites',
              subTitle: 'Se recomienda solo ingresar máximo 4 aceites.',
              buttons: ['OK']
            });
            alert.present();
            return false;
        }
      }
    });
    alert.present().then(() => {

    });
  }

  Modificador() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Elige los aceites modificadores');

    for (let key in this.modificadores) {
      alert.addInput({
        type: 'checkbox',
        label: ' '+this.modificadores[key].aceite,
        value: 'value1',
      });
    }

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        console.log('Checkbox data:', data);
        if (data.length > 4) {
            console.log ('entramos')
            let alert = this.alertCtrl.create({
              title: 'Cantidad de Aceites',
              subTitle: 'Se recomienda solo ingresar máximo 4 aceites.',
              buttons: ['OK']
            });
            alert.present();
            return false;
        }
      }
    });
    alert.present().then(() => {

    });
  }

  Ecualizador() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Elige los aceites ecualizadores');

    for (let key in this.ecualizadores) {
      alert.addInput({
        type: 'checkbox',
        label: ' '+this.ecualizadores[key].aceite,
        value: 'value1',
      });
    }

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        console.log('Checkbox data:', data);
        if (data.length > 4) {
            console.log ('entramos')
            let alert = this.alertCtrl.create({
              title: 'Cantidad de Aceites',
              subTitle: 'Se recomienda solo ingresar máximo 4 aceites.',
              buttons: ['OK']
            });
            alert.present();
            return false;
        }
      }
    });
    alert.present().then(() => {

    });
  }

  Mejorador() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Elige los aceites mejoradores/potenciadores');

    for (let key in this.mejoradores) {
      alert.addInput({
        type: 'checkbox',
        label: ' '+this.mejoradores[key].aceite,
        value: 'value1',
      });
    }

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        console.log('Checkbox data:', data);
        if (data.length > 4) {
            console.log ('entramos')
            let alert = this.alertCtrl.create({
              title: 'Cantidad de Aceites',
              subTitle: 'Se recomienda solo ingresar máximo 4 aceites.',
              buttons: ['OK']
            });
            alert.present();
            return false;
        }
      }
    });
    alert.present().then(() => {

    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClasificacionPage');
  }

}
