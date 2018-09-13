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
      Sistema
    </p></ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <ion-icon color="light" name="md-arrow-back" ></ion-icon>
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
        <p class="salto">{{sistema.quote}}</p>
      </ion-item>
      <ion-item *ngFor="let item of sistema['items']">
        <p class="titular">{{item.title}}</p>

          <p class="nota">
          {{item.note}}
          </p>

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
        quote: 'Responsable de transportar la sangre\na diversos tejidos en todo el cuerpo...',
        image: '../assets/imgs/cardio.jpg',
        items: [
          { title: 'Personificador', note: 'Clavo de Olor, Helicriso, Ylang-Ylang' },
          { title: 'Potenciador', note: 'Albahaca, Eneldo, Lavanda, Mejorana, Toronja' },
          { title: 'Ecualizador', note: 'Albahaca, Ciprés, Lavanda, Mejorana' },
          { title: 'Modificador', note: 'Lavanda, Toronja, Ylang-Ylang' }
        ]
      },
      {
        //************Checar Coriandro
        name: 'Sistema Digestivo',
        quote: 'Serie de órganos y glándulas\nque procesan los alimentos.',
        image: '../assets/imgs/digestivo.png',
        items: [
          { title: 'Personificador', note: 'Cardamomo, Clavo de Olor, Jengibre, \nMenta, Menta Verde, Naranja' },
          { title: 'Potenciador', note: 'Bergamota, Eneldo, Lima, Limón' },
          { title: 'Ecualizador', note: 'Baya de Enebro, Bergamota, Hinojo, Jengibre, Lima' },
          { title: 'Modificador', note: 'Bergamota, Cardamomo, Hinojo, Limón, Naranja' }
        ]
      },
      {
        name: 'Equilibrio Emocional',
        quote: 'Emociones son la forma en que nos sentimos como respuesta de lo que vemos, oímos, olemos, sentimos, saboreamos o pensamos.',
        image: '../assets/imgs/equilibrio.png',
        items: [
          { title: 'Personificador', note: 'Manzanilla Romana, Menta Verde, Naranja Silvestre, Rosa, Vetiver, Ylang-Ylang' },
          { title: 'Potenciador', note: 'Arborvitae, Bergamota, Geranio, Incienso, Lavanda, Melissa, Rosa' },
          { title: 'Ecualizador', note: 'Arborvitae, Baya de Enebro, Bergamota, Geranio, Incienso, Lavanda, Melissa, Rosa, Sándalo' },
          { title: 'Modificador', note: 'Bergamota, Lavanda, Melissa, Naranja Silvestre, Rosa, Sándalo, Ylang-Ylang' }
        ]
      },
      {
        //===*** Coriandro
        name: 'Sistema Hormonal',
        quote: 'Sistema endocrino, conjunto de glándulas productoras de hormonas.',
        image: '../assets/imgs/hormona.png',
        items: [
          { title: 'Personificador', note: 'Salvia Esclarea, Vetiver, Ylang-Ylang' },
          { title: 'Potenciador', note: '' },
          { title: 'Ecualizador', note: 'Hinojo, Mirra' },
          { title: 'Modificador', note: 'Hinojo, Mirra, Ylang-Ylang' }
        ]
      },
      {
        name: 'Sistema Inmunológico',
        quote: 'Es la defensa del cuerpo contra las enfermedades.',
        image: '../assets/imgs/inmune.png',
        items: [
          { title: 'Personificador', note: 'Canela, Casia, Clavo de Olor, Naranja Silvestre' },
          { title: 'Potenciador', note: 'Canela, Casia, Hierba Limonera, Incienso, Lima, Limón, Melaleuca, Orégano, Romero, Tomillo' },
          { title: 'Ecualizador', note: 'Hierba Limonera, Incienso, Lima, Melaleuca, Mirra, Orégano, Tomillo' },
          { title: 'Modificador', note: 'Limón, Mirra, Naranja Silvestre' }
        ]
      },
      {
        name: 'Músculos y Huesos ',
        quote: 'Tejido en el cuerpo que tiene capacidad para contraerse, haciendo posible el movimiento.',
        image: '../assets/imgs/huesos.png',
        items: [
          { title: 'Personificador', note: 'Abedul, Gaulteria, Helicriso, Menta' },
          { title: 'Potenciador', note: 'Abedul, Albahaca, Gaulteria, Hierba Limonera, Mejorana, Melaleuca, Orégano, Tomillo' },
          { title: 'Ecualizador', note: 'Albahaca, Ciprés, Hierba Limonera, Mejorana, Melaleuca, Orégano, Sándalo, Tomillo' },
          { title: 'Modificador', note: 'Sándalo' }
        ]
      },
      {
        name: 'Sistema Nervioso',
        quote: 'Red de células nerviosas que regulan la reacción del cuerpo.',
        image: '../assets/imgs/nervio.png',
        items: [
          { title: 'Personificador', note: 'Jengibre, Manzanilla Romana, Menta, Vetiver' },
          { title: 'Potenciador', note: 'Cedro, Incienso, Lavanda, Romero' },
          { title: 'Ecualizador', note: 'Cedro, Baya de Enebro, Incienso, Jengibre, Lavanda, Mirra, Sándalo' },
          { title: 'Modificador', note: 'Lavanda, Mirra, Sándalo' }
        ]
      },
      {
        name: 'Sistema Respiratorio',
        quote: 'Proporcionar sangre con oxígeno \na todas partes del cuerpo.',
        image: '../assets/imgs/respiratorio.png',
        items: [
          { title: 'Personificador', note: 'Cardamomo, Clavo de Olor, Menta' },
          { title: 'Potenciador', note: 'Arborvitae, Cedro, Eucalipto, Lima, Limón, Melaleuca, Orégano, Romero' },
          { title: 'Ecualizador', note: 'Abeto Blanco, Arborvitae, Cedro, Lima, Melaleuca, Orégano' },
          { title: 'Modificador', note: 'Cardamomo, Eucalipto, Limón' }
        ]
      },
      {
        name: 'Piel y Cabello',
        quote: 'Piel órgano que cubre el cuerpo, siendo la primera capa de protección y tejidos internos',
        image: '../assets/imgs/cabello.png',
        items: [
          { title: 'Personificador', note: 'Manzanilla Romana, Menta, Naranja Silvestre, Rosa, Vetiver' },
          { title: 'Potenciador', note: 'Arborvitae, Bergamota, Eucalipto, Geranio, Incienso, Lavanda, Melaleuca, Melissa, Pachulí, Rosa' },
          { title: 'Ecualizador', note: 'Arborvitae, Baya de Enebro, Bergamota, Geranio, Incienso, Lavanda, Melaleuca, Melissa, Mirra, Rosa, Sándalo' },
          { title: 'Modificador', note: 'Bergamota, Eucalipto, Lavanda, Melissa, Mirra, Naranja Silvestre, Rosa, Sándalo' }
        ]
      }
    ];
    this.sistema = sistemas[this.params.get('sistemaNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
