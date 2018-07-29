import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Aceite } from "../../interfaces/aceite.interface";
import { Personificadores } from "../../data/data.personificador";
import { Modificadores } from "../../data/data.modificador";

@Component({
  selector: 'page-clasificacion',
  templateUrl: 'clasificacion.html',
})
export class ClasificacionPage {
  personificadores:Aceite[] = [];
  personificadores1:String[];

  modificadores:Aceite[] = [];
  modificadores1:String[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personificadores = Personificadores.slice(0);
    this.personificadores1 = this.navParams.get('personificadores1');

    this.modificadores = Modificadores.slice(0);
    this.personificadores1 = this.navParams.get('modificadores1');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ClasificacionPage');
  }

  mostrarCambio(){
    console.log(this.personificadores1);
    console.log(this.modificadores1);
  }
}
