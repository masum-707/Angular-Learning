import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  userList = [
    { id: 1, name: 'Masum' },
    { id: 2, name: 'Rahim' },
    { id: 2, name: 'Karim' },
  ];
  // userList = [];
}
