import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KhidmahDetailsPage } from './khidmah-details';

@NgModule({
  declarations: [
    KhidmahDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(KhidmahDetailsPage),
  ],
})
export class KhidmahDetailsPageModule {}
