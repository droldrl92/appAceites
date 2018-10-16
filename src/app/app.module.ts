import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { CalculadoraPage } from "../pages/calculadora/calculadora";
import { ClasificacionPage } from "../pages/clasificacion/clasificacion";
import { NotasPage } from "../pages/notas/notas";
import { SistemasPage } from "../pages/sistemas/sistemas";
import { ModalContentPage } from "../pages/sistemas/sistemas";
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalculadoraPage,
    ClasificacionPage,
    NotasPage,
    SistemasPage,
    ModalContentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CalculadoraPage,
    ClasificacionPage,
    NotasPage,
    SistemasPage,
    ModalContentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ScreenOrientation
  ]
})
export class AppModule {}
