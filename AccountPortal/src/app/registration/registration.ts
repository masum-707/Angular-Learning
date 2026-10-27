import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [FormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  user = {
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  onSubmit() {
    console.log('Registration Data Stored:', this.user);
  }
}
