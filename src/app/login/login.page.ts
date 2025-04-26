import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonItem, IonContent, CommonModule, FormsModule]
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private navCtrl: NavController) {}

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // Your login logic here
    // Example: this.navCtrl.navigateForward('/home');
  }

  goToRegister() {
    this.navCtrl.navigateBack('sign-up');
  }
}
