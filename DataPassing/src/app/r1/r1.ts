import { Component } from '@angular/core';
import { R2 } from '../r2/r2';
import { R3 } from '../r3/r3';

@Component({
  selector: 'app-r1',
  imports: [R2, R3],
  templateUrl: './r1.html',
  styleUrl: './r1.css',
})
export class R1 {}
