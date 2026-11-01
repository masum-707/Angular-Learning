import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersData {
  users = ['A', 'B', 'C', 'D'];
  getUsers() {
    return this.users;
  }
  addUsers(user: string): void {
    this.users.push(user);
  }
}
