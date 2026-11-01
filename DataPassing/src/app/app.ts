import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Root } from './root/root';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Root],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('DataPassing');
}
