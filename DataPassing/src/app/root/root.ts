import { Component } from '@angular/core';
import { L1 } from '../l1/l1';
import { R1 } from '../r1/r1';

@Component({
  selector: 'app-rootE',
  imports: [L1, R1],
  templateUrl: './root.html',
  styleUrl: './root.css',
})
export class Root {
}
