import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the MosquetabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mosquetabs',
  templateUrl: 'mosquetabs.html'
})
export class MosquetabsPage {

  mosqueRoot = 'MosquePage'
  programRoot = 'ProgramPage'
  khidmahRoot = 'KhidmahPage'
  infaqRoot = 'InfaqPage'
  askImamRoot = 'AskImamPage'


  constructor(public navCtrl: NavController) {}

}
