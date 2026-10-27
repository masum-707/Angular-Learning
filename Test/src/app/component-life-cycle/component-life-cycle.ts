import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  Input,
  AfterViewChecked,
  DoCheck,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component-life-cycle',
  imports: [FormsModule],
  templateUrl: './component-life-cycle.html',
  styleUrl: './component-life-cycle.css',
})
export class ComponentLifeCycle implements OnChanges, OnInit, OnDestroy, AfterViewChecked, DoCheck {
  @Input({ required: true }) productName: string = '';
  @Input() priceX = 1000;
  price = 0;
  userName: string = '';
  constructor() {
    // console.log('Constructor called checked');
  }
  changePrice(): void {
    this.price += this.priceX;
    // this.priceX++;
  }

  // changeValue(): void {
  //   this.productName = 'mobile';
  // }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['productName']) {
    //   console.log('Product Name changed:', changes['productName']);
    // }
    // if (changes['priceX']) {
    //   console.log('Price changed check onChange:', changes['priceX']);
    // }
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    // console.log(`aft-v-c:`, this.price);
    // console.log(typeof this.userName);
    // console.log(this.userName);
  }
  ngOnInit(): void {
    // console.log(this.productName);
    // console.log(`check ngOnInit`, this.price);
    // this.changeValue();
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    // console.log(`test do checked`);
  }

  bg = 'Aqua';
  changeBg(): void {
    if (this.bg === 'Aqua') {
      this.bg = `Purple`;
    } else {
      this.bg = 'Aqua';
    }
  }

  email: string = '';
  getEmail(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.email = input.value;
  }

  password = '';
  isTrue = true;
  select = 'default';
  inputRef = '';

  ngOnDestroy(): void {
    console.log(' Component destroyed');
  }
}
