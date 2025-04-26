import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import the Router for navigation
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, CommonModule, FormsModule], // Include ReactiveFormsModule for form handling
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage  {
  firstName = '';
  lastName = '';
  phoneNumber = '';

  constructor(private navCtrl: NavController) {}

  goNext() {
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    console.log('Phone Number:', this.phoneNumber);

    // Navigate to password setup page or next registration step
    // Example: this.navCtrl.navigateForward('/set-password');
  }

  goLogin() {
    this.navCtrl.navigateForward('/login');
  }
}