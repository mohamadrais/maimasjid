import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LanguagePage } from '../pages/language/language';
import { SignupPage } from '../pages/signup/signup';
import { RegisterPage } from '../pages/register/register';
import { MosquetabsPage } from '../pages/mosquetabs/mosquetabs';
import { KhidmahDetailsPage } from '../pages/khidmah-details/khidmah-details';
import { ProgramDetailsPage } from '../pages/program-details/program-details';
import { InfaqDetailsPage } from '../pages/infaq-details/infaq-details';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LanguagePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
