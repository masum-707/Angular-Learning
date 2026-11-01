import { Component, inject } from '@angular/core';
import { UsersData } from '../users-data';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  // users = new UsersData();
  protected users = inject(UsersData);
  public userList = this.users.getUsers();
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log(this.userList);
  }
}
