import { Component, input } from '@angular/core';

@Component({
  selector: 'app-receiver',
  imports: [],
  templateUrl: './receiver.html',
  styleUrl: './receiver.css',
})
export class Receiver {
  userData = input<string>('');
}
