import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Registration } from './registration/registration';
import { Users } from './users/users';
import { Receiver } from './receiver/receiver';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Registration, Users, Receiver],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('AccountPortal');
  inputData = 'This text insert from parent Class';
  childData = '';
  receivedChildData(data: string) {
    this.childData = data;
  }
}
