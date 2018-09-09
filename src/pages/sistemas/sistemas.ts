import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-sistemas',
  templateUrl: 'sistemas.html',
})
export class SistemasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  abrirSistema(sistemaNum) {

    let modal = this.modalCtrl.create(ModalContentPage, sistemaNum);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SistemasPage');
  }

}


@Component({
  selector: 'page-modal',
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title><p>
      Aceites por Sistema
    </p></ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <ion-icon color="light" name="md-close" ></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
      <ion-item>

      <ion-thumbnail item-start>
        <img src={{sistema.image}}>
      </ion-thumbnail>
        <h2>{{sistema.name}}</h2>
        <p>{{sistema.quote}}</p>
      </ion-item>
      <ion-item *ngFor="let item of sistema['items']">
        <p class="titular">{{item.title}}</p>
          <pre>
          <p class="nota">
          {{item.note}}
          </p>
          </pre>
      </ion-item>
  </ion-list>
</ion-content>
`
})
export class ModalContentPage {
  sistema;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var sistemas = [
      {
        name: 'Sistema Cardiovascular',
        quote: 'Sneaky little hobbitses!',
        image: '../assets/imgs/cardio.png',
        items: [
          { title: 'Personificador', note: '\nClavo de Olor, Helicriso, Ylang-Ylang' },
          { title: 'Potenciador', note: '\nAlbahaca, Eneldo, Lavanda, Mejorana, Toronja' },
          { title: 'Ecualizador', note: '\nAlbahaca, Ciprés, Lavanda, Mejorana' },
          { title: 'Modificador', note: '\nLavanda, Toronja, Ylang-Ylang' }
        ]
      },
      {
        //************Checar Coriandro
        name: 'Sistema Digestivo',
        quote: 'Sneaky little hobbitses!',
        image: '../assets/imgs/cardio.png',
        items: [
          { title: 'Personificador', note: '\nCardamomo, Clavo de Olor, \nJengibre, Menta, Menta Verde, Naranja' },
          { title: 'Potenciador', note: '\nBergamota, Eneldo, Lima, Limón' },
          { title: 'Ecualizador', note: '\nBaya de Enebro, Bergamota, Hinojo, Jengibre, Lima' },
          { title: 'Modificador', note: '\nBergamota, Cardamomo, Hinojo, Limón, Naranja' }
        ]
      },
      {
        name: 'Equilibrio Emocional',
        quote: 'Sneaky little hobbitses!',
        image: '../assets/imgs/cardio.png',
        items: [
          { title: 'Personificador', note: '' },
          { title: 'Potenciador', note: '' },
          { title: 'Ecualizador', note: '' },
          { title: 'Modificador', note: '' }
        ]
      },
      {
        name: 'Sistema Hormonal',
        quote: 'Sneaky little hobbitses!',
        image: '../assets/imgs/cardio.png',
        items: [
          { title: 'Personificador', note: '' },
          { title: 'Potenciador', note: '' },
          { title: 'Ecualizador', note: '' },
          { title: 'Modificador', note: '' }
        ]
      },
      {
        name: 'Sistema Inmunológico',
        quote: 'Sneaky little hobbitses!',
        image: '../assets/imgs/cardio.png',
        items: [
          { title: 'Personificador', note: '' },
          { title: 'Potenciador', note: '' },
          { title: 'Ecualizador', note: '' },
          { title: 'Modificador', note: '' }
        ]
      },
      {
        name: 'Músculos y Huesos ',
        quote: 'Sneaky little hobbitses!',
        image: '../assets/imgs/cardio.png',
        items: [
          { title: 'Personificador', note: '' },
          { title: 'Potenciador', note: '' },
          { title: 'Ecualizador', note: '' },
          { title: 'Modificador', note: '' }
        ]
      },
      {
        name: 'Sistema Nervioso',
        quote: 'Sneaky little hobbitses!',
        image: '../assets/imgs/cardio.png',
        items: [
          { title: 'Personificador', note: '' },
          { title: 'Potenciador', note: '' },
          { title: 'Ecualizador', note: '' },
          { title: 'Modificador', note: '' }
        ]
      },
      {
        name: 'Sistema Respiratorio',
        quote: 'Sneaky little hobbitses!',
        image: '../assets/imgs/cardio.png',
        items: [
          { title: 'Personificador', note: '' },
          { title: 'Potenciador', note: '' },
          { title: 'Ecualizador', note: '' },
          { title: 'Modificador', note: '' }
        ]
      },
      {
        name: 'Piel y Cabello',
        quote: 'Sneaky little hobbitses!',
        image: '../assets/imgs/cardio.png',
        items: [
          { title: 'Personificador', note: '' },
          { title: 'Potenciador', note: '' },
          { title: 'Ecualizador', note: '' },
          { title: 'Modificador', note: '' }
        ]
      }
    ];
    this.sistema = sistemas[this.params.get('sistemaNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
