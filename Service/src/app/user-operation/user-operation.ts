import { Component } from '@angular/core';
import { UsersData } from '../users-data';

@Component({
  selector: 'app-user-operation',
  imports: [],
  templateUrl: './user-operation.html',
  styleUrl: './user-operation.css',
})
export class UserOperation {
  // users = new UsersData();
  // userList2 = this.users.getUsers();
  public users: string[] = [];
  constructor(private usersData: UsersData) {
    this.users = this.usersData.getUsers();
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    // console.log(this.userList2);
    console.log(this.users);
  }
}
