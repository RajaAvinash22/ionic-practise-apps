import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private toastController: ToastController) { }
  async presentToast(message: any) {
    const toast = await this.toastController.create({
      // tslint:disable-next-line: object-literal-shorthand
      message: message,
      duration: 2000,
      position: 'top',
      color: 'dark'
    });
    toast.present();
  }
}
