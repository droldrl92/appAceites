import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CalculadoraPage } from "../calculadora/calculadora";
import { ClasificacionPage } from "../clasificacion/clasificacion";
import { NotasPage } from "../notas/notas";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1 : any;
  tab2 : any;
  tab3 : any;

  constructor(public navCtrl: NavController) {
    this.tab1 = ClasificacionPage;
    this.tab2 = NotasPage;
    this.tab3 = CalculadoraPage;
  }

}
