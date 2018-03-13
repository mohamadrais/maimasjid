import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MosqueProfilePage } from './mosque-profile';

@NgModule({
  declarations: [
    MosqueProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(MosqueProfilePage),
  ],
})
export class MosqueProfilePageModule {}
