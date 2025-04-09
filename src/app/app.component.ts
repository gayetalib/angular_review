import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cash_management_front';
  age: number = 30;
  counter: number = 0;
  value: string = '';
  display: boolean = false;
  onEdit(value: string) {
    this.value = value == '' ? '' : 'Hello ' + value + '!';
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  reset() {
    this.counter = 0;
  }

}
