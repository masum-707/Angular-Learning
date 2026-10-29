import { Component, output } from '@angular/core';

@Component({
  selector: 'app-r4',
  imports: [],
  templateUrl: './r4.html',
  styleUrl: './r4.css',
})
export class R4 {
  valueR4 = output<string>();
  sendValue(x: string) {
    this.valueR4.emit(x);
  }
}
