import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
})
export class ProductdetailPage implements OnInit {
  constructor(private nav: NavController) {}

  ngOnInit() {}
  // goBack() {
  //   this.nav.push(HomePage);
  // }
}
