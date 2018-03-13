import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MosquetabsPage } from '../mosquetabs/mosquetabs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  mosquetabsPage(){
    this.navCtrl.push(MosquetabsPage)
  }

}
