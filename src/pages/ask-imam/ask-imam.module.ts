import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AskImamPage } from './ask-imam';

@NgModule({
  declarations: [
    AskImamPage,
  ],
  imports: [
    IonicPageModule.forChild(AskImamPage),
  ],
})
export class AskImamPageModule {}
