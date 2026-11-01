import { Component, inject } from '@angular/core';
import { ApiService } from '../api-service';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-existing-user',
  imports: [AsyncPipe],
  templateUrl: './existing-user.html',
  styleUrl: './existing-user.css',
})
export class ExistingUser {
  protected existingUser = inject(ApiService);
  users$ = this.existingUser.getExistingUser();
  usersFetch: any = [];
  constructor() {
    this.usersFetch = fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    // console.log(this.users$);
  }
}
