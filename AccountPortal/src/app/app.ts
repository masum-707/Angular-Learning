import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Registration } from './registration/registration';
import { Users } from './users/users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Registration, Users],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('AccountPortal');
}
