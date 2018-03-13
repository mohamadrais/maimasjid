import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { InfaqDetailsPage } from '../infaq-details/infaq-details';

/**
 * Generated class for the InfaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infaq',
  templateUrl: 'infaq.html',
})
export class InfaqPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfaqPage');
  }
    homePage(){
      this.navCtrl.push(HomePage)
    }
    infaqdetailsPage(){
      this.navCtrl.push(InfaqDetailsPage)
    }
}
