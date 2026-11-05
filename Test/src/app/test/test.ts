import { Component } from '@angular/core';
import { map, of, filter, firstValueFrom, Observable, observable } from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {
  id: string = '101M';
  name: string = 'Masum';
  isChecked: boolean = false;
  popup(): void {
    alert(`My Info\nName:${this.name}\nId:${this.id}`);
    console.log('check btn clicked');
  }

  tryRxjs() {
    const source = new Observable((obserber) => {
      obserber.next('hello');
      obserber.next('I am ');
      // obserber.error('error');
      obserber.next('masum');
      obserber.complete();
    });

    source.subscribe({
      next: (value) => console.log(value),
      error: (error) => console.log(error),
      complete: () => console.log('successfuly collect the source'),
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const numbers$ = of(1, 2, 3, 4);
    console.log(numbers$);
    numbers$
      .pipe(
        map((value) => value),
        filter((value) => value > 2),
      )
      .subscribe((value) => console.log(value));
    // console.log(firstValueFrom(numbers$));
    this.tryRxjs();
  }
}
