import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  isRegistrationPage = true;
  user = {
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    password: '',

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  onSubmit(): void {
    if (this.isRegistrationPage) {
      console.log('Registration Data Stored:', this.user);
      localStorage.setItem('userInfo', JSON.stringify(this.user));
    }
  }
  toggleTemplated(): void {
    if (this.isRegistrationPage === true) {
      this.isRegistrationPage = false;
    } else {
      this.isRegistrationPage = true;
    }
  }
}
