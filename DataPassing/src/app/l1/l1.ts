import { Component } from '@angular/core';
import { L2 } from '../l2/l2';
import { L3 } from '../l3/l3';

@Component({
  selector: 'app-l1',
  imports: [L2, L3],
  templateUrl: './l1.html',
  styleUrl: './l1.css',
})
export class L1 {}
