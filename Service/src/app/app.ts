import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './users/users';
import { UserOperation } from './user-operation/user-operation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Users, UserOperation],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Service');
}
