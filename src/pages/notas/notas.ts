import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Alta, MediaAlta, Media, MediaBase, Base } from "../../data/data.notas";
import { Aceite } from "../../interfaces/aceite.interface";

@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})
export class NotasPage {
  altas:Aceite[] = [];
  mediasaltas:Aceite[] = [];
  medias:Aceite[] = [];
  mediasbases:Aceite[] = [];
  bases:Aceite[]=[];

  alta:number = 0;
  mediaalta:number = 0;
  media:number = 0;
  mediabase:number = 0;
  base:number = 0;

  auxalta:number = 0;
  auxmediaalta:number = 0;
  auxmedia:number = 0;
  auxmediabase:number = 0;
  auxbase:number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.altas = Alta;
    this.mediasaltas = MediaAlta;
    this.medias = Media;
    this.mediasbases = MediaBase;
    this.bases = Base;
  }




  Alta() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Elige los aceites de nota Alta');

    for (let key in this.altas) {
      alert.addInput({
        type: 'checkbox',
        label: this.altas[key].aceite,
        value: this.altas[key].aceite
      });
    }


    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        console.log('Checkbox data Alta:', data);
        this.auxalta = data.length;
        if (this.auxalta > 2) {
            let alert = this.alertCtrl.create({
              title: 'Cantidad de Aceites',
              subTitle: 'Se recomienda solo ingresar máximo 2 aceites.',
              buttons: ['OK']
            });
            alert.present();
            return false;
        }
        else
        {
          if (this.auxalta >= 1) {
              if (this.base!=0) {
                  this.alta = Math.ceil((0.10/this.auxalta)*16);
                  this.base = Math.ceil((0.10/this.auxbase)*16);
              }else{
                this.alta = Math.ceil((0.20/this.auxalta)*16);
              }
          }
        }
      }
    });
    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Reiniciar',
      handler: data => {
        console.log('Checkbox data Alta:', data);
        this.alta = 0;
        if (this.base!=0) {
            this.base = Math.ceil((0.20/this.auxbase)*16);
        }
      }
    });
    alert.present().then(() => {

    });
  }

  Base() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Elige los aceites de nota Base');

    for (let key in this.bases) {
      alert.addInput({
        type: 'checkbox',
        label: this.bases[key].aceite,
        value: this.bases[key].aceite
      });
    }

    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        console.log('Checkbox data Base:', data);
        this.auxbase = data.length;
        if (this.auxbase > 2) {
            let alert = this.alertCtrl.create({
              title: 'Cantidad de Aceites',
              subTitle: 'Se recomienda solo ingresar máximo 2 aceites.',
              buttons: ['OK']
            });
            alert.present();
            return false;
        }
        else
        {
          if (this.auxbase >= 1) {
            if (this.alta!=0) {
                this.alta = Math.ceil((0.10/this.auxalta)*16);
                this.base = Math.ceil((0.10/this.auxbase)*16);
            }else{
              this.base = Math.ceil((0.20/this.auxbase)*16);
            }
          }
        }
      }
    });

    alert.addButton('Cancelar');

    alert.addButton({
      text: 'Reiniciar',
      handler: data => {
        console.log('Checkbox data base:', data);
        this.base = 0;
        if (this.alta!=0) {
            this.alta = Math.ceil((0.20/this.auxalta)*16);
        }
      }
    });

    alert.present().then(() => {

    });
  }

  Media() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Elige los aceites de nota Base');

    for (let key in this.medias) {
      alert.addInput({
        type: 'checkbox',
        label: this.medias[key].aceite,
        value: this.medias[key].aceite
      });
    }


    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        console.log('Checkbox data Media:', data);
        this.auxmedia = data.length;
        if (this.auxmedia > 4) {
            let alert = this.alertCtrl.create({
              title: 'Cantidad de Aceites',
              subTitle: 'Se recomienda solo ingresar máximo 4 aceites.',
              buttons: ['OK']
            });
            alert.present();
            return false;
        }
        else
        {
          if (this.auxmedia >= 1) {

              if (this.mediaalta!=0 && this.mediabase!=0) {
                  this.media = Math.ceil((0.25/this.auxmedia)*16);
                  this.mediaalta = Math.ceil((0.25/this.auxmediaalta)*16);
                  this.mediabase = Math.ceil((0.25/this.auxmediabase)*16);
              }else{
                if (this.mediaalta!=0) {
                    this.mediaalta = Math.ceil((0.40/this.auxmediaalta)*16);
                    this.media = Math.ceil((0.40/this.auxmedia)*16);
                }else{
                  if (this.mediabase!=0) {
                    this.mediabase = Math.ceil((0.40/this.auxmediabase)*16);
                    this.media = Math.ceil((0.40/this.auxmedia)*16);
                  }else{
                    this.media = Math.ceil((0.80/data.length)*16);
                  }
                }
              }
          }
        }
      }
    });
    alert.addButton('Cancelar');

    alert.addButton({
      text: 'Reiniciar',
      handler: data => {
        console.log('Checkbox data Alta:', data);
        this.media = 0;
        if (this.mediaalta!=0 && this.mediabase!=0) {
            this.mediaalta = Math.ceil((0.40/this.auxmediaalta)*16);
            this.mediabase = Math.ceil((0.40/this.auxmediabase)*16);
        }else{
          if (this.mediaalta!=0) {
              this.mediaalta = Math.ceil((0.80/this.auxmediaalta)*16);
          }
          if (this.mediabase!=0) {
              this.mediabase = Math.ceil((0.80/this.auxmediabase)*16);
          }
        }
      }
    });

    alert.present().then(() => {

    });
  }

  MediaAlta() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Elige los aceites de nota Media-Alta');

    for (let key in this.mediasaltas) {
      alert.addInput({
        type: 'checkbox',
        label: this.mediasaltas[key].aceite,
        value: this.mediasaltas[key].aceite
      });
    }


    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        console.log('Checkbox data Media-Alta:', data);
        this.auxmediaalta = data.length;
        if (this.auxmediaalta > 4) {
            let alert = this.alertCtrl.create({
              title: 'Cantidad de Aceites',
              subTitle: 'Se recomienda solo ingresar máximo 4 aceites.',
              buttons: ['OK']
            });
            alert.present();
            return false;
        }
        else
        {
          if (this.auxmediaalta >= 1) {

            if (this.media!=0 && this.mediabase!=0) {
                this.media = Math.ceil((0.25/this.auxmedia)*16);
                this.mediaalta = Math.ceil((0.25/this.auxmediaalta)*16);
                this.mediabase = Math.ceil((0.25/this.auxmediabase)*16);
            }else{
              if (this.media!=0) {
                  this.mediaalta = Math.ceil((0.40/this.auxmediaalta)*16);
                  this.media = Math.ceil((0.40/this.auxmedia)*16);
              }else{
                if (this.mediabase!=0) {
                  this.mediabase = Math.ceil((0.40/this.auxmediabase)*16);
                  this.mediaalta = Math.ceil((0.40/this.auxmediaalta)*16);
                }else{
                  this.mediaalta = Math.ceil((0.80/this.auxmediaalta)*16);
                }
              }
            }

          }
        }
      }
    });
    alert.addButton('Cancelar');

    alert.addButton({
      text: 'Reiniciar',
      handler: data => {
        console.log('Checkbox data Alta:', data);
        this.mediaalta = 0;
        if (this.media!=0 && this.mediabase!=0) {
            this.mediaalta = Math.ceil((0.40/this.auxmediaalta)*16);
            this.media = Math.ceil((0.40/this.auxmedia)*16);
        }else{
          if (this.media!=0) {
              this.media = Math.ceil((0.80/this.auxmedia)*16);
          }
          if (this.mediabase!=0) {
              this.mediabase = Math.ceil((0.80/this.auxmediabase)*16);
          }
        }
      }
    });

    alert.present().then(() => {

    });
  }

  MediaBase() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Elige los aceites de nota Media-Base');

    for (let key in this.mediasbases) {
      alert.addInput({
        type: 'checkbox',
        label: this.mediasbases[key].aceite,
        value: this.mediasbases[key].aceite
      });
    }


    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        console.log('Checkbox data Media:', data);
        this.auxmediabase = data.length;
        if (this.auxmediabase > 4) {
            let alert = this.alertCtrl.create({
              title: 'Cantidad de Aceites',
              subTitle: 'Se recomienda solo ingresar máximo 4 aceites.',
              buttons: ['OK']
            });
            alert.present();
            return false;
        }
        else
        {
          if (this.auxmediabase >= 1) {

            if (this.mediaalta!=0 && this.media!=0) {
                this.media = Math.ceil((0.25/this.auxmedia)*16);
                this.mediaalta = Math.ceil((0.25/this.auxmediaalta)*16);
                this.mediabase = Math.ceil((0.25/this.auxmediabase)*16);
            }else{
              if (this.mediaalta!=0) {
                  this.mediaalta = Math.ceil((0.40/this.auxmediaalta)*16);
                  this.mediabase = Math.ceil((0.40/this.auxmediabase)*16);
              }else{
                if (this.media!=0) {
                  this.mediabase = Math.ceil((0.40/this.auxmediabase)*16);
                  this.media = Math.ceil((0.40/this.auxmedia)*16);
                }else{
                  this.mediabase = Math.ceil((0.80/this.auxmediabase)*16);
                }
              }
            }

          }
        }
      }
    });
    alert.addButton('Cancelar');

    alert.addButton({
      text: 'Reiniciar',
      handler: data => {
        console.log('Checkbox data MediBase:', data);
        this.mediabase = 0;
        if (this.media!=0 && this.mediaalta!=0) {
            this.mediaalta = Math.ceil((0.40/this.auxmediaalta)*16);
            this.media = Math.ceil((0.40/this.auxmedia)*16);
        }else{
          if (this.media!=0) {
              this.media = Math.ceil((0.80/this.auxmedia)*16);
          }
          if (this.mediaalta!=0) {
              this.mediaalta = Math.ceil((0.80/this.auxmediaalta)*16);
          }
        }
      }
    });

    alert.present().then(() => {

    });
  }

  Reiniciar(){
    this.alta = 0;
    this.mediaalta = 0;
    this.media = 0;
    this.mediabase = 0;
    this.base = 0;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NotasPage');
  }

}
