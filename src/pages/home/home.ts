import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CalculadoraPage } from "../calculadora/calculadora";
import { ClasificacionPage } from "../clasificacion/clasificacion";
import { NotasPage } from "../notas/notas";
import { SistemasPage } from "../sistemas/sistemas";

import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1 : any;
  tab2 : any;
  tab3 : any;
  tab4 : any;

  constructor(public navCtrl: NavController, private screenOrientation: ScreenOrientation) {
    this.tab1 = ClasificacionPage;
    this.tab2 = NotasPage;
    this.tab3 = CalculadoraPage;
    this.tab4 = SistemasPage;
    console.log(this.screenOrientation.type);
    this.screenOrientation.onChange().subscribe(
   () => {
       console.log("Orientation Changed");
       this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

   }
);
  }


}
