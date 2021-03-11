import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  e: number = Math.E;
  str = 'hello world';
  date: Date = new Date();
  float = 0.42;
  obj = {
    a: { name: 1 },
    b: {
      object: {
        name: 2,
      },
      g: {},
    },
  };
}
