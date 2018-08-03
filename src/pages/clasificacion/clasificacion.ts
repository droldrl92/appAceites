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
  personificador:number = 0;
  mejorador:number = 0;
  ecualizador:number = 0;
  modificador:number = 0;

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
        label: this.personificadores[key].aceite,
        value: this.personificadores[key].aceite
      });
    }

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        console.log('Checkbox data:', data);
        if (data.length > 1) {
            let alert = this.alertCtrl.create({
              title: 'Cantidad de Aceites',
              subTitle: 'Se recomienda solo ingresar máximo 1 aceites.',
              buttons: ['OK']
            });
            alert.present();
            return false;
        }
        else
        {
          if (data.length == 1) {
              this.personificador = Math.ceil(0.05*16);
          }
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
        label: this.modificadores[key].aceite,
        value: this.modificadores[key].aceite
      });
    }

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        console.log('Checkbox data:', data);
        if (data.length > 2) {
            let alert = this.alertCtrl.create({
              title: 'Cantidad de Aceites',
              subTitle: 'Se recomienda solo ingresar máximo 2 aceites.',
              buttons: ['OK']
            });
            alert.present();
            return false;
        }else
        {
          if (data.length>=1) {
                this.modificador = Math.ceil((0.08/data.length)*16);
          }
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
        label: this.ecualizadores[key].aceite,
        value: this.ecualizadores[key].aceite,
      });
    }

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        console.log('Checkbox data:', data);
        if (data.length > 3) {
            let alert = this.alertCtrl.create({
              title: 'Cantidad de Aceites',
              subTitle: 'Se recomienda solo ingresar máximo 3 aceites.',
              buttons: ['OK']
            });
            alert.present();
            return false;
        }else
        {
          if (data.length>=1) {
                this.ecualizador = Math.ceil((0.15/data.length)*16);
          }
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
        label: this.mejoradores[key].aceite,
        value: this.mejoradores[key].aceite,
      });
    }

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        console.log('Checkbox data:', data);
        if (data.length > 14) {
            let alert = this.alertCtrl.create({
              title: 'Cantidad de Aceites',
              subTitle: 'Se recomienda solo ingresar máximo 14 aceites.',
              buttons: ['OK']
            });
            alert.present();
            return false;
        }
        else
        {
          if (data.length>=1) {
                this.mejorador = Math.ceil((0.80/data.length)*16);
          }
        }
      }
    });
    alert.present().then(() => {

    });
  }

  reiniciar(){
    this.mejorador = 0;
    this.ecualizador = 0;
    this.modificador = 0;
    this.personificador= 0;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClasificacionPage');
  }
  
}
