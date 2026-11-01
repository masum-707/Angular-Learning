import { Component, input, output } from '@angular/core';
import { R4 } from '../r4/r4';
import { L3 } from '../l3/l3';

@Component({
  selector: 'app-r3',
  imports: [R4, L3],
  templateUrl: './r3.html',
  styleUrl: './r3.css',
})
export class R3 {
  receivedR4 = '';
  inputData(data: any) {
    this.receivedR4 = data;
  }
}
