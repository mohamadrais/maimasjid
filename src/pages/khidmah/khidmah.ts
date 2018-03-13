import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { KhidmahDetailsPage } from '../khidmah-details/khidmah-details';

/**
 * Generated class for the KhidmahPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-khidmah',
  templateUrl: 'khidmah.html',
})
export class KhidmahPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KhidmahPage');
  }
    homePage(){
      this.navCtrl.push(HomePage)
    }
    khidmahdetailsPage(){
      this.navCtrl.push(KhidmahDetailsPage)
    }
}
