import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Network } from '@ionic-native/network';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private network: Network,
    private toast: ToastController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Paises', component: 'PaisesPage' }

    ];

    this.conexion();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }



  //metodo de la conexion
  conexion() {
    this.network.onDisconnect().subscribe(() => {
      this.openToast('Desconectado de Internet');
    });


    this.network.onConnect().subscribe(() => {
      this.openToast('Conectado a Internet');

      // setTimeout(() => {
      //   if (this.network.type === 'wifi') {
      //     console.log('we got a wifi connection, woohoo!');
      //   }
      // }, 3000);
    });
  }


  openToast( mensaje: string ){

    let toast= this.toast.create({
      message: mensaje,
      duration: 3000,
      position: 'bottom',

    });

    toast.present();

  }

}
