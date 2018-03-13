import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfaqDetailsPage } from './infaq-details';

@NgModule({
  declarations: [
    InfaqDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(InfaqDetailsPage),
  ],
})
export class InfaqDetailsPageModule {}
