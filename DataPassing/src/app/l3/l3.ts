import { AfterViewChecked, Component, input } from '@angular/core';
import { R4 } from '../r4/r4';

@Component({
  selector: 'app-l3',
  imports: [R4],
  templateUrl: './l3.html',
  styleUrl: './l3.css',
})
export class L3 implements AfterViewChecked {
  valueR4 = input();
  
  // setValue(data: string) {
  //   this.valueR4 = data;
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  //   // if (changes['this.valueR4']) {
  //   //   console.log('l3 value update', changes['this.valueR4'].currentValue);
  //   // }
  // }
  ngAfterViewChecked(): any {
    console.log('view change', this.valueR4());
    return this.valueR4();
  }
}
