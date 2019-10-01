import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public alertController: AlertController,
    public router: Router
    ) {}

  async buttonClicked(){
    var alert = await this.alertController.create({
      header: "Alert",
      message: "Welcome, human! You pressed the button.",
      buttons: ['Okay']
    });
    await alert.present();
  }

  //properties of the Home Page (variables)
  username: string;

  gotoAbout(){
    this.router.navigate(['/about']);
  }

  saveName(){
    this.router.navigate(['/username/' + this.username ])
  }

}
