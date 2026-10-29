import { Component, EventEmitter, input, output, Output } from '@angular/core';

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
    { id: 3, name: 'Karim' },
  ];
  // userList = [];

  user = input('Masum');

  // @Output() message = new EventEmitter<string>();
  message = output<string>();
  sendMessage() {
    this.message.emit('This line from child Component using @Output');
  }
}
