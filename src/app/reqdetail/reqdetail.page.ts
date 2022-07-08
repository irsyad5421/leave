import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reqdetail',
  templateUrl: './reqdetail.page.html',
  styleUrls: ['./reqdetail.page.scss'],
})
export class ReqdetailPage implements OnInit {

  constructor(public toastCtrl: ToastController) { }

  ngOnInit() {
  }
  showToast() {
    const toast = this.toastCtrl.create({
      message: 'You Approve the request',
      duration: 3000
     
    })
    .then(toastData => toastData.present());
  }

  showToastw() {
    const toast = this.toastCtrl.create({
      message: 'You Reject the request',
      duration: 3000
     
    })
    .then(toastData => toastData.present());
  }


}
