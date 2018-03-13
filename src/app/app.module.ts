import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MosquetabsPageModule } from '../pages/mosquetabs/mosquetabs.module';
import { MosquePageModule } from '../pages/mosque/mosque.module';
import { LanguagePage } from '../pages/language/language';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MosqueProfilePage } from '../pages/mosque-profile/mosque-profile';
import { ProgramPageModule } from '../pages/program/program.module';
import { KhidmahPageModule } from '../pages/khidmah/khidmah.module';
import { InfaqPageModule } from '../pages/infaq/infaq.module';
import { AskImamPageModule } from '../pages/ask-imam/ask-imam.module';
import { KhidmahDetailsPage } from '../pages/khidmah-details/khidmah-details';
import { ProgramDetailsPage } from '../pages/program-details/program-details';
import { InfaqDetailsPage } from '../pages/infaq-details/infaq-details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LanguagePage,
    LoginPage,
    RegisterPage,
    MosqueProfilePage,
    KhidmahDetailsPage,
    ProgramDetailsPage,
    InfaqDetailsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MosquetabsPageModule,
    MosquePageModule,
    ProgramPageModule,
    KhidmahPageModule,
    InfaqPageModule,
    AskImamPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LanguagePage,
    LoginPage,
    RegisterPage,
    MosqueProfilePage,
    KhidmahDetailsPage,
    ProgramDetailsPage,
    InfaqDetailsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
